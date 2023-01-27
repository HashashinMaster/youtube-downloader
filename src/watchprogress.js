import  { io } from 'socket.io-client';
import $ from 'jquery';
import StreamTemplate from '../templates/StreamProgressCard.html';
import Handlebars from 'handlebars';
import { Line } from 'progressbar.js';
import toastr from 'toastr';
const socket = io();
const template = Handlebars.compile(StreamTemplate);
const data = JSON.parse(videosJson);
$(document).ready(fnReady)
function fnReady() {
    $('body')
    .append($('<button>refresh</button>').click(()=>location.reload()))
    if( dataType === 'playlist')
        downloadPlaylist()
    else
        downloadVideo(data)

}








async function downloadPlaylist() {
    for( const video of data.videos ) {
        let format;
        if(data.allSameFormat) 
            format = data.format.split(":")[1].toLowerCase()
        else 
            format = video.format.split(":")[1].toLowerCase()
        await downloadVideo(video,format,data.dir)
    }
    toastr.info('Finished',"your playlist is finished Downloading",{timeOut:100000});
}
function downloadVideo(videoObj,format,dir){
    removeEventListeners();
    $('body')
        .append(template(videoObj));
    const bar = new Line(`div#escape${videoObj.id}`,{
        easing: 'easeIn',
        strokeWidth: 0.5,
        trailWidth: 0.1,
        color:'#86c288',
        
    });
    return new Promise((resolve,reject) => {

    socket.on('download-completed', video => {
        const toastOptions = {
            closeButton: true,
            progressBar: true
        }
        $(`#escape${videoObj.id}preparing`)
        .text('video downloaded')
        .append('<i class="fa-solid fa-circle-check text-sMain"></i>')
        toastr.success(video.title,'Download completed',toastOptions)
        resolve()
    });
    socket.on('progress', progress => {
        $(`#escape${videoObj.id}preparing`).text('converting video Stream Owo!')
        bar.animate( progress/100,{
            duration:100,
        });
        $(`i#escape${videoObj.id}`)
            .text(`${progress}%`)
    })
    socket.on('error', err => reject(err))
    socket.emit('download-video', {...videoObj,dir:dir? dir: videoObj.dir, format: format? format: videoObj.format.split(":")[1].toLowerCase()})
})
}

function removeEventListeners() {
    socket.removeEventListener('download-completed');
    socket.removeEventListener('progress');
    socket.removeEventListener('error');
  }

