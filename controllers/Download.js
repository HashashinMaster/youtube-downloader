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


module.exports = { 
    showDownloadPage,
    showDownloadErr,
    showDownloadProgressPage
}