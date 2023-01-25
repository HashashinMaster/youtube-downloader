const ytdl = require('ytdl-core');
const dd = require('../scripts/scrap.json');
const hbjs = require('handbrake-js');
const { createWriteStream, unlink, exists } = require('fs');
const {join, resolve} = require('path');
const { getVideoInfo, getPlaylistInfo } = require('../scripts/weedy');
const showDownloadPage = async ( req, res ) => {
    
    if(req.body.url === undefined)
        return res.render('Error', {code:404, message: "oops something is wrong! get back the main page and try again."})
    
    try {
        let data;
        if(req.body.type ==='video'){
            data = await getVideoInfo(req.body.url);
            return res.render('Download', { data, type: req.body.type })
        }
        else if(req.body.type ==='playlist'){
            // data = await getPlaylistInfo(req.body.url);
            return res.render('Download', { data: dd, type: req.body.type })

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
    const { data, type} = req.body.type
    return res.render('WatchProgress',{ type, data })
    
    // const data = JSON.parse(req.body.data);
    // if(req.body.type === "video") {
    //     const format = data.format.split(":")[1].toLowerCase()
    //     await downloadAndConvert(data, format, data.dir)
    //     return res.render('WatchProgress',{})
    // }
    // for (const video of data.videos){
    //     let format;
    //     if(data.allSameFormat) 
    //         format = data.format.split(":")[1].toLowerCase()
    //     else 
    //         format = video.format.split(":")[1].toLowerCase()
    //     await downloadAndConvert(video,format,data.dir)
    // }
}


async function downloadAndConvert(video,format,dir) {
    
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
    showDownloadProgressPage
}