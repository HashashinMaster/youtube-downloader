import $ from "jquery"

$(document).ready(() => {
    const formats = videoInfo.formats
    .map( e => e.mimeType.slice(0,e.mimeType.indexOf(';')))
    .filter((e, i, a) => a.indexOf(e) === i)

    console.log(formats)
} )