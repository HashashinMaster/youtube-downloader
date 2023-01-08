const { app: electronApp, BrowserWindow } = require('electron')
const path = require('path')
const server = require("./server");
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,d: path.join(__dirname, 'preload.js')
    }
  })

  win.loadURL('http://localhost:3000/')
}
//electron-packager C:\Users\HP\Desktop\BigProjects\youtube_downloader Weedy --platform=win32 --arch=x64 --electron-version=22.0.0
electronApp.whenReady().then(() => {
  createWindow()

  electronApp.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

electronApp.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electronApp.quit()
  }
})
