const path = require('path');
const express = require('express');
const app = express();

app.listen(3000,() => console.log('server is listening at port 3000'))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname,'public')))

app.get('/',( req, res ) => {
    res.render('Home')
})

app.get('/download',( req, res ) => {
    res.render('download')
})














// const youtubeDL = require('youtube-dl-exec');

// const ytDownload = youtubeDL.exec('https://www.youtube.com/watch?v=_7vQSPBtwyc',
// {
//     format: '139'
// },
// {
//     cwd: path.join(__dirname, 'uploads') 
// });
// // video.stdout.on('data', data => {
    
// //     // let output = data.trim().split(" ").filter(n => n);
// //     console.log(Object.getOwnPropertyNames(data))
// // })
// // video.stdout.on('readable', read => console.log('read',read))
// ytDownload.on('', data => {

//     console.log('stdout end', data);

// });

// ytDownload.stdout.on('close', data => {

//     console.log('stdout close', data);

// });

// ytDownload.stderr.on('end', data => {

//     console.log('end', data);

// });

// ytDownload.stderr.on('close', data => {

//     console.log('close', data);

// });

// ytDownload.stderr.on('data', data => {

//     console.log('data', data);

// });