import $ from "jquery";
import toastr from 'toastr';


$(document).ready(fnReady)
const toastOptions = {
    closeButton: true,
    progressBar: true
}
function fnReady() {
        $('input[type="submit"]').click( (e) => {
        e.preventDefault();
        const videoInfo = validation();
        if(!$('input[type="text"]').val())
            return toastr.error("url field is empty",'',toastOptions)
        if(videoInfo.success) {
            $('input[type="hidden"]').val(videoInfo.type)
            $('form').submit();
            return
        }
        toastr.error($('input[type="text"]').val(),"invalid url!",toastOptions)

        })
}

function validation() {
    const value = $('input[type="text"]').val();
    return {
        success: value.includes('https://www.youtube.com/watch?v') ||  value.includes("https://www.youtube.com/playlist?list"),
        type: value.includes('https://www.youtube.com/watch?v')? 'video': 'playlist'
    }
}