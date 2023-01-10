const ytdlCore = require('ytdl-core');
const showDownloadPage = async ( req, res ) => {
    
    if(req.body.url === undefined)
        return res.render('Error', {code:404, message: "oops something is wrong! get back the main page and try again."})
    
    try {
        const data = await ytdlCore.getInfo(req.body.url,{
            
        });
            return res.render('Download', {url:req.body.url,videoInfo:JSON.stringify(data)})
    } catch (error) {
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