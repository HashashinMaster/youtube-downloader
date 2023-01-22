const { app: electronApp, BrowserWindow, ipcMain, dialog, app } = require('electron')
const path = require('path')
const server = require("./server");

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // titleBarStyle: 'hidden',
    // titleBarOverlay: {
    //   color: '#2f3241',
    //   symbolColor: '#74b1be',
    
    // },
    icon: path.join(__dirname,"public","logo.png"),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.setBackgroundColor('#2f3241')
  win.loadURL('http://localhost:3000/')
}
//electron-packager C:\Users\HP\Desktop\BigProjects\youtube_downloader Weedy --platform=win32 --arch=x64 --electron-version=22.0.0
electronApp.whenReady().then(() => {
  ipcMain.handle('get-dir', async () => {
    const { canceled, filePaths} = await dialog.showOpenDialog({
      properties: ['openDirectory','createDirectory'],
      filters: [
        { name: 'Folders', extensions: ['*'] }
      ]
  });
    if (canceled || filePaths === undefined) {
      return "no directory selected"
    } else {
      return filePaths[0]
    }
  })

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
