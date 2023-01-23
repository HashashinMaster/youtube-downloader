const ytdl = require('ytdl-core');
const dd = require('../scripts/scrap.json');
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
    const data = JSON.parse(req.body.data);
    if(data.allSameFormat) {
        let downloaded = 0;
        await ytdl(`https://www.youtube.com/watch?v=${data.videos[0]}`)
        .on('response', (res) => {
            const videoSize = parseInt(res.headers['content-length'], 10);
            res.on('data', (chunk) => {
                downloaded += chunk.length;
                console.log(`${(Math.round((downloaded / videoSize) * 100)*10)/2}% downloaded`);
        })
        });
        
                
    }
    return res.render('WatchProgress',{})
}
module.exports = { 
    showDownloadPage,
    showDownloadErr,
    showDownloadProgressPage
}