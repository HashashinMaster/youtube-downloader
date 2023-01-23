
const router = require('express').Router();
const home = require('../controllers/Home');
const { 
    showDownloadPage, 
    showDownloadErr, 
    showDownloadProgressPage 
} = require('../controllers/Download');

router
.route('/')
.get(home);

router
.route('/download')
.post(showDownloadPage)
.get(showDownloadErr);

router
.route('/download/watch/progress')
.post(showDownloadProgressPage);

module.exports = router