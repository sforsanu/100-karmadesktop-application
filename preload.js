// preload.js

const { contextBridge, ipcRenderer } = require('electron');

// Expose custom API to the web page
contextBridge.exposeInMainWorld('myElectronAPI', {
  sendToMain: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
});
