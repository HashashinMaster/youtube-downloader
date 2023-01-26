const ytdl = require('ytdl-core');
const hbjs = require('handbrake-js');
const { createWriteStream, exists } = require('fs');
const {join} = require('path');
const weedy = require('../scripts/weedy');
const showDownloadPage = async ( req, res ) => {
    
    if(req.body.url === undefined)
        return res.render('Error', {code:404, message: "oops something is wrong! get back the main page and try again."})
    
    try {
        let data;
        if(req.body.type ==='video'){
            data = await weedy.getVideoInfo(req.body.url);
            return res.render('Download', { data, type: req.body.type })
        }
        else if(req.body.type ==='playlist'){
            data = await weedy.getPlaylistInfo(req.body.url);
            return res.render('Download', { data, type: req.body.type })

        }
    
    } catch (error) {
        console.log(error.message)
        return res.render('Error', {code:404,message:" something is wrong! check ur connection and try again"})
        
    }
};


const showDownloadErr = (req, res) => {
    return res.render('Error', {code:404,message:" you need to send url in form!"})
};


const showDownloadProgressPage = async (req, res) => {
    if(!req.body.data)
        return res.render('Error', {code:404,message:" data is Missing!"})
    const { data, type } = req.body
    return res.render('WatchProgress',{ type, data })

}


async function downloadAndConvert(video,format,dir,io) {
    
    const tempPath = join(__dirname,'..','temp','t.mp4');
    const output = createWriteStream(tempPath);
    let downloaded = 0;
    const stream =  ytdl(`https://www.youtube.com/watch?v=${video.id}`,{ filter: 'videoandaudio' });
        stream.on('response', (res) => {
        const videoSize = parseInt(res.headers['content-length'], 10);
        res.on('data', (chunk) => {
            downloaded += chunk.length;
            // console.log(`${(Math.round((downloaded / videoSize) * 100)*10)/2}% downloaded`);
        })
        });
        stream.pipe(output);
        return new Promise( (resolve , reject ) => {
            stream.on('end', () => {
                let filename = video.title + '.' +format;
                exists(join(dir,filename), exist => {
                    filename  = exist? video.title+ '1.' +  format: filename
                    console.log(filename)
                    hbjs.spawn({ 
                        input: tempPath, 
                        output: join(dir,filename),
                        
                    })
                    .on('error', err => {
                        console.log(err)
                        reject(err)
                    })
                    .on('progress', progress => {
                        io.emit('progress',progress.percentComplete)
                        console.log(
                            'Percent complete: %s, ETA: %s',
                            progress.percentComplete,
                            progress.eta
                            )
                        })
                    .on('complete',() => resolve('Download Completed'))
                    })
            
            // .on('complete', () => unlink(join(__dirname,'..','temp','t.mp4')))
            // .on('cancelled', () => unlink(join(__dirname,'..','temp','t.mp4')))
        })
        });


}
module.exports = { 
    showDownloadPage,
    showDownloadErr,
    showDownloadProgressPage,
    downloadAndConvert
}