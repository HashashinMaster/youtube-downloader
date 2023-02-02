const hbjs = require('handbrake-js');
const { createWriteStream, exists } = require('fs');
const {join} = require('path');
const ytdl = require('ytdl-core');
let handBrakeInstance;
let shouldKeepDownloading = false;

const  socketDownloadHandler =  io => {
    io.on('connection', socket => {
        socket.on('download-video', async (video) => {
            try{
                await downloadAndConvert(video, video.format, video.dir,io,socket)
            }
            catch (err) {
                console.log(err.message)
            }
            io.emit('download-completed',video)
        })
        socket.on('cancelDown', async () => {
            shouldKeepDownloading = false;
            if(handBrakeInstance){
                await handBrakeInstance.cancel()
                io.emit('canceled', 'video canceled')
            }
            else{
                io.emit('canceled', 'video canceled')

            }
        })
        

    })
}
async function downloadAndConvert(video,format,dir,io) {
    shouldKeepDownloading = true;
    const tempPath = join(__dirname,'..','temp','t.mp4');
    const output = createWriteStream(tempPath);
    const stream =  ytdl(`https://www.youtube.com/watch?v=${video.id}`,{ filter: 'videoandaudio' });
        stream.pipe(output);
        return new Promise( (resolve , reject ) => {
            stream.on('end', () => {
                let filename = video.title.replace(/[^\w\u0600-\u06FF\s]+/g,'') + '.' +format;
                exists(join(dir,filename), exist => {
                    if(!shouldKeepDownloading)
                    {
                        return; 
                    }
                    filename  = exist? video.title.replace(/[^\w\u0600-\u06FF\s]+/g,'')+ '1.' +  format: filename
                    console.log(filename)
                    handBrakeInstance = hbjs.spawn({ 
                        input: tempPath, 
                        output: join(dir,filename),
                    });
                    handBrakeInstance
                    .on('error', err => {
                        console.log(err)
                        reject(err)
                    })
                    .on('progress', progress => {
                        io.emit('progress',progress.percentComplete)
                    })
                    .on('complete',() => resolve('Download Completed'))
                    });
            
        })
        });


}
module.exports = socketDownloadHandler