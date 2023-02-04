# youtube media downloader

 A Desktop app built with [electron](https://www.electronjs.org/) made for downloading youtube videos with a **unique** features.
 
 # Setting up development environment
 1. Prerequisites
    - you need to have [node.js](https://nodejs.org/en/) installed in your machine
2. installing depenencies
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
- multiple formats:
   - video formats:
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
     
     
   
     
     
     
    
     
     
  
 
