"use strict";
import $ from "jquery";
import Handlebars from 'handlebars';
import MovieCard from '../templates/MovieCard.html';
const template = Handlebars.compile(MovieCard);


$(document).ready(() => {
    setVideoEvenets();
    setCheckedEvents();
    if(movieJson.length >16)
        handleScroll();
    
});


let index = movieJson.length >16? 16: 0;
function handleScroll() {
    $(window).scroll(() => {
        if((scrollY + innerHeight) >= ($(document.body).height() - 100) && index < movieJson.length-1 ){
            for(let i =index; i < index + 16;i++) {
                if(movieJson[i] === undefined)
                break;
                $('#cardsContainer').append(
                    template(
                        {
                            title: movieJson[i].title,
                            thumbnail: movieJson[i].thumbnail,
                            uploaderName: movieJson[i].author,
                            duration: movieJson[i].duration,
                            videoId: new URL( movieJson[i].url).searchParams.get('v'),
                            time_uploaded: movieJson[i].time_uploaded,
                            views: movieJson[i].views,
                            formats:['mp4','mp3']
                        }
                    )
                )
                
            }
            index += 16;
            setVideoEvenets();
            setCheckedEvents();
        }
    })
}

let excludedVids = [];
function setCheckedEvents() {
    $('.fa-circle-check')
    .each( (i,el) =>{
        $(el).click(() => {
            if($(el).attr("class").includes('fa-solid')){
                $(el)
                .attr('class',
                $(el)
                .attr('class')
                .replace('fa-solid',"fa-regular"));
                excludedVids.push($(el).attr('data-videoId'));
                
            }
            
            else{
                $(el)
                .attr('class',
                $(el)
                .attr('class')
                .replace('fa-regular',"fa-solid"));
                excludedVids = excludedVids.filter(id => id !== $(el).attr('data-videoId'));
            }
            
        })
        
    });

    
}
let timeoutsHolder = {}
function setVideoEvenets() {
    $('[data-id]').each( (index,playButton) => {
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
                $(playButton).children('i').attr('class',$(playButton).children('i').attr('class').replace("fa-play","fa-stop"));
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
                $(playButton).children('i').attr('class',$(playButton).children('i').attr('class').replace("fa-stop","fa-play"));
                    clearTimeout(timeoutsHolder[videoId]);
                    
                

            }
        })
    })
}