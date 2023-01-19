const ytdl = require('ytdl-core')
const ytpl = require('ytpl');
const { getVideoInfo, getPlaylistInfo } = require('../scripts/weedy');
const showDownloadPage = async ( req, res ) => {
    
    if(req.body.url === undefined)
        return res.render('Error', {code:404, message: "oops something is wrong! get back the main page and try again."})
    
    try {
        let data
        if(req.body.type ==='video'){
            data = await getVideoInfo(req.body.url);
            return res.render('Download', data)
        }
        else if(req.body.type ==='playlist'){
            data = await getPlaylistInfo(req.body.url);
            console.log(data)
            return res.render('Download', data)

        }
    
    } catch (error) {
        console.log(error.message)
        return res.render('Error', {code:404,message:" something is wrong! check ur connection and try again"})
        
    }
};


const showDownloadErr = (req, res) => {
    return res.render('Error', {code:404,message:" you need to send url in form!"})
};
module.exports = {
    showDownloadPage,
    showDownloadErr
}