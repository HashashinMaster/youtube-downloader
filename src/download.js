import $ from "jquery";

$(document).ready(() => {
    
    $('[data-id]').each( (index,playButton) => {
        $(playButton).click(() => {
            const videoId = playButton.getAttribute('data-id');
            if(!$(playButton).children('i').attr('class').includes("fa-stop")) {
                let timeoutHoler;
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
                console.log(timer);
                timeoutHoler = setTimeout(() => {
                    console.log('i got here')
                    $(playButton).click();
                },timer*1000)
                        
            }
            else{
                $(playButton.parentElement)
                .children('.videoHolder')
                .replaceWith(
                    `<img id=${videoId} src="https://i.ytimg.com/vi/${videoId}/mqdefault.jpg" alt="couldn't load the image" />`
                )
                $(playButton).children('i').attr('class',$(playButton).children('i').attr('class').replace("fa-stop","fa-play"))
                if(timeoutHoler)
                    clearTimeout(timeoutHoler)

            }
        })
    })
} )