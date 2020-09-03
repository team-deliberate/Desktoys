const { contextBridge, ipcRenderer } = require('electron');

// // Expose protected methods that allow the renderer process to use
// // the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  closeWindow: (channel, data) => {
    ipcRenderer.send('close-window-event');
  },
});
