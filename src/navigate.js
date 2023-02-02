import $ from 'jquery';
import PopUp from '../templates/Popup.html';
import Handlebars from 'handlebars';
import  { io } from 'socket.io-client';
const socket = io();
$(document).ready(() => {
    if( location.href === 'http://localhost:3000/download' || location.href === 'http://localhost:3000/download/watch/progress'){
        const i = $('<i>',{
        class:'fa-solid fa-arrow-left text-white cursor-pointer text-sMain text-lg'
    })
    if(location.href === 'http://localhost:3000/download/watch/progress'){
        const template = Handlebars.compile(PopUp);
        i.click(() => {
            $('body')
            .append(template())
        
            $('#cancel')
            .click(function (){
                $(this)
                .parent()
                .parent()
                .remove()
            })
            $('#confirm')
            .click( () => {                
                socket.emit('cancelDown')
            })
            // history.back()
        })
    }
    else{
        i.click( () => history.back())
    }
    i.appendTo('#navigation-container')
    }    
    if(history.length > 1 && location.href ==='http://localhost:3000/') {
        const i = $('<i>',{
            class:'fa-solid fa-arrow-right text-white cursor-pointer text-sMain text-lg'
        })
        i.click(() => history.forward())
        i.appendTo('#navigation-container')
        $('#navigation-container').addClass('bg-MovieCard')
    }
    if((location.href === 'http://localhost:3000/download' || location.href === 'http://localhost:3000/download/watch/progress') && history.length > 1 ) {
        $('#navigation-container').addClass('flex justify-between bg-MovieCard')
    }
    else {
        $('#navigation-container').addClass('flex justify-end')
        
    }

})