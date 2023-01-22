const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  getDir: () => ipcRenderer.invoke('get-dir')

})