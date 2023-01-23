"use strict";
import $ from "jquery";
import Handlebars from 'handlebars';
import MovieCard from '../templates/MovieCard.html';
import toastr from "toastr";

const videoFormats = [
    'video:mp4',
    'video:webm',
    'video:avi',
    'video:mkv',
    'video:flv',
    'video:wmv',
    'video:mov',
    'video:m4v',
    'video:3gp',
    'video:asf',
    'video:m2ts',
    'video:ts',
    'video:hevc',
    'video:vp9'
];
const audioFormats = [
    'audio-only:mp3',
    'audio-only:aac',
    'audio-only:ogg',
    'audio-only:wav',
    'audio-only:wma',
    'audio-only:flac',
    'audio-only:alac',
    'audio-only:opus',
    'audio-only:vorbis',
    'audio-only:pcm',
    'audio-only:dts'
];


const template = Handlebars.compile(MovieCard);


let timeoutsHolder = {}
$(document).ready(() => {

    setVideoEvenets();
    directoryEvenetHandler();
    submit();
    if(videosJson.length >16)
        handleScroll();
    
});


let index = videosJson.length >16? 16: 0;
//this function when user scroll it shows more videos if the length of vids more than 16! show 16 every scroll
function handleScroll() {
    $(window).scroll(() => {
        if((scrollY + innerHeight) >= ($(document.body).height() - 100) && index < videosJson.length-1 ){
            for(let i =index; i < index + 16;i++) {
                if(videosJson[i] === undefined)
                break;
                $('#cardsContainer').append(
                    template(
                        {
                            title: videosJson[i].title,
                            thumbnail: videosJson[i].thumbnail,
                            uploaderName: videosJson[i].author,
                            duration: videosJson[i].duration,
                            videoId: new URL( videosJson[i].url).searchParams.get('v'),
                            time_uploaded: videosJson[i].time_uploaded,
                            views: videosJson[i].views,
                            formats: videoFormats.concat(audioFormats)
                        }
                    )
                )
                
            }
            index += 16;
            setVideoEvenets();
        }
    })
}

// handling including and excluding a video event
let excludedVids = [];
function setCheckedEvent(playButton) {
    $(playButton)
    .parent()
    .children('.fa-circle-check')
    .click(function ()  {
            if($(this).attr("class").includes('fa-solid')){
                $(this)
                .attr('class',
                $(this)
                .attr('class')
                .replace('fa-solid',"fa-regular"));
                excludedVids.push($(this).attr('data-videoId'));
            }
            
            else{
                $(this)
                .attr('class',
                $(this)
                .attr('class')
                .replace('fa-regular',"fa-solid"));
                excludedVids = excludedVids.filter(id => id !== $(this).attr('data-videoId'));
            }
        })
    }
    
// handle video play and stop
function setVideoEvenets() {
    $('[data-id]').each( (index,playButton) => {
        if($(playButton).attr("listener") !== 'true'){
        setCheckedEvent(playButton);
        $(playButton).attr("listener",'true');
        $(playButton).click(() => {
            const videoId = playButton.getAttribute('data-id');
            if(!$(playButton).children('i').attr('class').includes("fa-stop")) {
                $(`#${videoId}`)
                .replaceWith(`<div class="videoHolder w-full"></div>`);
                $(playButton.parentElement) 
                .children('.videoHolder')
                .append(`
                <iframe width="100%" class="pointer-events-none" src='https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&disablekb=1&rel=0&controls=0'></iframe>
                <div class=' h-1 w-0 bg-red-600 progressBar'></div>
                `);
                $(playButton)
                .children('i')
                .attr('class',
                $(playButton)
                .children('i')
                .attr('class')
                .replace("fa-play","fa-stop"));
                const duration = $(playButton.parentElement)
                .children('span')
                .text()
                .split(":")
                let timer;
                if(duration.length < 3) {
                    timer = (parseInt(duration[0]) * 60) + parseInt(duration[1]) - 1;
                }
                else {
                    timer = (parseInt(duration[0]) * 3600) + (parseInt(duration[1]) * 60) -1  + parseInt(duration[2]);
                }
                timeoutsHolder[videoId] = setTimeout(() => {
                    $(playButton).click();
                },timer*1000)
            }
            else{
                $(playButton.parentElement)
                .children('.videoHolder')
                .replaceWith(
                    `<img id=${videoId} src="https://i.ytimg.com/vi/${videoId}/mqdefault.jpg" alt="couldn't load the image" />`
                );
                $(playButton)
                .children('i')
                .attr('class',
                $(playButton)
                .children('i')
                .attr('class')
                .replace("fa-stop","fa-play"));
                clearTimeout(timeoutsHolder[videoId]);
                    
                

            }
            
        });
    }
    })
}

//directory button event handler
function directoryEvenetHandler() {
    
    checkLocalStorage()
    $('#directoryBtn').click( async () => {
    const dir = await electronAPI.getDir();
    if(dir !== "no directory selected") {
        localStorage.setItem('dir',dir)
    }
    checkLocalStorage();

})
}
// check if there is a directory saved in localStorage
function checkLocalStorage () {
    if(localStorage.getItem('dir'))
        $('#directoryBtn').attr('title',`current Directory selected: ${localStorage.getItem('dir')}`)
    else 
    $('#directoryBtn').attr('title',"no directory selected")
}


// handling submitions
function submit() {
    const toastOptions = {
        closeButton: true,
        progressBar: true
    }
    $('#sendConfig')
    .click(() => {
        let allSameFormat = $('#selectAll').prop('checked');
        console.log(allSameFormat)
        if(!localStorage.getItem('dir')){
            toastr.error('Choose a Directory!','No Directory Selected',toastOptions)
            return
        }
            const includedVids = excludedVids.length > 0? 
            videosJson.filter( video => !excludedVids
                .includes(new URL( video.url)
                .searchParams
                .get('v'))): 
                videosJson;
            let data;    
            if(allSameFormat){
                data = includedVids.map(video =>  new URL( video.url).searchParams.get('v'))
            data= {
                dir: localStorage.dir,
                allSameFormat, 
                format: $('#selectAllFormats').val(), 
                videos: data 
            }
            }
            else{
                data = includedVids.map(video => {
                    return {
                        id: new URL(video.url).searchParams.get('v'),
                        format: $(`[data-id = "${
                            new URL(video.url)
                            .searchParams
                            .get('v')}"]`)
                            .parent()
                            .children('select')
                            .val()
                    }
                })
                data = {
                    dir: localStorage.dir,
                    allSameFormat,
                    videos:data
                }
            }
            $(document.body)
            .append(
                $("<form method='post' action='download/watch/progress'></form>")
                .append(`<input name="data" type="hidden"  value='${JSON.stringify(data)}' />`)
            );
            $('form').submit();
            
    })
}