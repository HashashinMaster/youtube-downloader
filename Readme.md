# youtube media downloader

 A Desktop app built with [electron](https://www.electronjs.org/) made for downloading youtube videos with a **unique** features.

 # Dowload Weedy app
 [click here](https://www.mediafire.com/file/fmpufbwp5jbm4q0/weedy-win32-x64.rar/file) to download the zip file and exract it, once you extract the app you can use it direclty
## Notes:
 1. app still in beta version.
 2. github release was so slow and faills every second that's why i used mediafire instead.

 # Setting up development environment
 1. Prerequisites
    - you need to have [node.js](https://nodejs.org/en/) installed in your machine
    - also you need to install chromium. check [Readme.md](./scripts/Readme.md) for more infos
2. installing dependencys 
    - this project is shared without node_modules folder so you have to install all the the dependencys by your self.
    - to install dependencys:
      1. open your command line
      2. go to your directory where the project located
      3. execute  ```npm install``` or ```npm i``` to install all the dependencys
    - these are the dependencys used in this project and the realtions with each other:
      ```mermaid
      graph TD;
          tailwindcss-->css;
          autoprefixer-->tailwindcss;
          postcss-->tailwindcss;
          postcss-cli-->tailwindcss;
      ```
   ```mermaid
      graph TD;
      electron-squirrel-startup-->electron;
          electron-forge/cli-->electron;
          electron-forge/maker-deb-->electron;
          electron-forge/maker-rpm-->electron;
          electron-forge/maker-squirrel-->electron;
          electron-forge/maker-zip-->electron;
     ```
    ```mermaid
      graph TD;
      express-->server;
      handbrake-js-->ytdl-core;
      pug-->express;
      socket.io-->express;
      puppeteer-->express;
      ytdl-core-->express;
    ```
    ```mermaid
      graph TD;
      javascript-->client;
      handlebars-->javascript;
      jquery-->javascript;
      socket.io-client-->javascript;
      toastr-->javascript;
      
    ```
    ```mermaid
      graph TD;
      raw-loader-->webpack;
      webpack-cli-->webpack;
      
    ```
  - after installing all the dependencys you are ready to start the application:
    - to start the application run ```npm start``` in the same directory
# Features
 ### 1. multiple formats:

  | video formats | audio formats |
  | ------------- | ------------- |
  | MP4           | AAC           |
  | MKV           | AC3           |
  | AVI           | DTS           |
  | M4V           | DTS-HD        |
  | MOV           | E-AC3         |
  | WMV           | FLAC          |
  | MPEG-1        | MP3           |
  | MPEG-2        | Opus          |
  | MPEG-4        | TrueHD        |
  | H.264         | Vorbis        |
  | H.265         |               |
  | VP8           |               |
  | VP9           |               |
  | Theora        |               |
     
- If you are trying to download a **playlist** you can download all the videos with the same format (by default its mp4):

<img width="955" alt="s3" src="https://user-images.githubusercontent.com/97839369/216778201-47f09d74-90c8-406b-b6c1-4c528f14f902.PNG">

   - Or you can uncheck the chekbox and choose the format you want to install for every video (by default its mp4):
     
<img width="960" alt="s5" src="https://user-images.githubusercontent.com/97839369/216778672-380c578b-f510-4104-ae12-79453f7fdd0f.PNG">


### 2. exclude a video from a playlist:

  - If you have a video that you don't want to download with the other videos you can exclude it form the playlist by unchecking the checkbox in bottom right:
   
<img width="914" alt="s6" src="https://user-images.githubusercontent.com/97839369/216779031-fa9b3b51-488b-4dc3-868f-76e4d6e9d551.PNG">

### 3. choose the directory where the videos should locate:

 <p> you can choose the directory where you the videos to locate by clicking on choose Directory button. </p>
 
<img width="850" alt="s7" src="https://user-images.githubusercontent.com/97839369/216779210-cfca70e0-f24e-4475-b561-dcaf33c09c92.PNG">

### 4. watch the progress of your videos UwU:

 <p> when you click on download you are going to direct to another page where you can see the Download progress.</p>
 
 <img width="942" alt="s8" src="https://user-images.githubusercontent.com/97839369/216779399-d71e35b3-4040-4568-bbcc-0062e41d09e5.PNG">
 
 <p> you also get notified when a video is completed </p>
 
<img width="947" alt="s9" src="https://user-images.githubusercontent.com/97839369/216779491-d38c8777-19ab-44cb-972d-85ef82b93415.PNG">

# youtube video demo

<a href="https://www.youtube.com/watch?v=VJ_7WJOHDLY&ab_channel=HashashinMaster">
 <img src="https://img.youtube.com/vi/VJ_7WJOHDLY/default.jpg">
</a>
