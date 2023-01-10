import $ from "jquery";
import toastr from 'toastr';
$(document).ready(fnReady)
const toastOptions = {
    closeButton: true,
    progressBar: true
}
function fnReady() {
        console.log("im working")
        $('input[type="submit"]').click( (e) => {
        e.preventDefault();
        if(validation()) {
            $('form').submit();
            return
        }
        toastr.error("Enter a valid url","invalid url!",toastOptions)

        })
}

function validation() {
    const value = $('input[type="text"]').val();
    return value.includes('https://www.youtube.com/watch?v') ||  value.includes("https://www.youtube.com/playlist?list")
}