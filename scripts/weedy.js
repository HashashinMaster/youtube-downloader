const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

let browser;
( async () => {
    browser = await puppeteer.launch({timeout:0});
})()

const getPlaylistInfo =  async (url) => {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    page.setDefaultTimeout(0);
    await page.goto(url,{waitUntil: 'load', timeout: 0});
    await page.waitForSelector('a#video-title');
    await page.waitForSelector('.metadata-stats > .byline-item > span');
    await page.waitForSelector('ytd-thumbnail-overlay-time-status-renderer #text');

    const plVideoCount = await page.$eval('.metadata-stats > .byline-item > span', (el) => {
        return el.textContent;
    });
    const reloadCount = Math.ceil(plVideoCount/100); 
    for( let i = 0; i < reloadCount; i++){
        await page.evaluate(() => {
            window.scrollBy(0, document.querySelector('ytd-app').scrollHeight);
          });
        const lastLink = await page.evaluate( ()=> Array.from(document.querySelectorAll('a#video-title')).pop().href);
        const index = new URLSearchParams(lastLink).get('index');
        if(Number.isInteger(parseInt(index)/100))
            await page.waitForSelector(`a#video-title[href*="index=${parseInt(index)+1}"]`);
    }

    const data = await page.evaluate(()=> {
        function getData(selector,attr){
            return Array.from(document.querySelectorAll(selector)).map(selected => selected[attr]);
            
        }
        const titles = getData('a#video-title','textContent')
        const authors = getData('yt-formatted-string#text > a','textContent');
        const views = getData('yt-formatted-string#video-info span:nth-child(1)','textContent' );
        const durations = getData('ytd-thumbnail-overlay-time-status-renderer span#text','textContent');
        const time_uploads = getData('yt-formatted-string#video-info span:nth-child(3)','textContent' );
        const urls = getData('a#video-title','href')
        const links = document.querySelectorAll('a#video-title');
        let data = [];
        for( let i = 0; i < titles.length; i++){
            data.push(
                {
                    title: titles[i],
                    thumbnail: `https://i.ytimg.com/vi/${links[i].data.watchEndpoint.videoId}/mqdefault.jpg`,
                    author: authors[i],
                    views: views[i],
                    duration: durations[i],
                    time_uploaded: time_uploads[i],
                    url: urls[i]
                }
            )
        }
        return data
    })
    await fs.writeFile(path.join(__dirname,'scrap.json'),JSON.stringify(data,null,2));
     page.close();
    return data;
    
};

const getVideoInfo =  async (url) => {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    page.setDefaultTimeout(0);
    await page.goto(url);
    await page.waitForSelector('#title > h1 > yt-formatted-string');
    await page.waitForSelector('#text > a');
    await page.waitForSelector('#info > span:nth-child(1)');
    await page.waitForSelector('.ytp-time-duration');
    const title = await getContent('#title > h1 > yt-formatted-string');
    const thumbnail = `https://i.ytimg.com/vi/${new URL(url).searchParams.get('v')}/mqdefault.jpg`;
    const author = await getContent('#text > a');
    const views = await getContent("#info > span:nth-child(1)");
    const time_uploaded = await getContent("#info > span:nth-child(3)");
    const duration = await getContent(".ytp-time-duration");
    page.close()
    return {
        title,
        thumbnail,
        author,
        views,
        time_uploaded,
        duration,
        url
    }
    function getContent (selector) {
        return page.$eval(selector, (el) => el.textContent);
    }
}

//youtube playlist 
// $('body script').each( async (i,el)=> {
//     if($(el).html().includes('var ytInitialData')){
//         const jsonStr = $(el).html().replace("var ytInitialData = ","").replace(";","");
//         // console.log(JSON.parse(JSON.stringify(jsonStr)))
//         await fs.writeFile(path.join(__dirname,'scrap.json'),JSON.stringify(JSON.parse(jsonStr),null,2));
//     }
// })

module.exports = {
    getVideoInfo,
    getPlaylistInfo
}