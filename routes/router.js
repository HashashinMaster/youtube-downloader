
const router = require('express').Router();
const home = require('../controllers/Home')
const { showDownloadPage, showDownloadErr } = require('../controllers/Download');

router
.route('/')
.get(home);

router
.route('/download')
.post(showDownloadPage)
.get(showDownloadErr);

module.exports = router