const showDownloadPage = ( req, res ) => {
    console.log()
    if(req.body.url === undefined)
        return res.render('Error', {code:404, message: "oops something is wrong! get back the main page and try again."})
    return res.render('Download', {url:req.body.url})
};

const showDownloadErr = (req, res) => {
    return res.render('Error', {code:404,message:" you need to send url in form!"})
};
module.exports = {
    showDownloadPage,
    showDownloadErr
}