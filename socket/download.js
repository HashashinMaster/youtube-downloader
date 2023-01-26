const { downloadAndConvert } = require('../controllers/Download');
const  socketDownloadHandler =  io => {
    io.on('connection', socket => {
        // console.log('user connected');
        socket.on('download-video', async (video) => {
            console.log(video)
            try{
                await downloadAndConvert(video, video.format, video.dir,io)
            }
            catch (err) {
                console.log(err.message)
            }
            io.emit('download-completed',video)
        })
    })
}

module.exports = socketDownloadHandler