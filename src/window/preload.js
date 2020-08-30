// const { contextBridge, BrowserWindow, ipcRenderer } = require('electron');

// // Expose protected methods that allow the renderer process to use
// // the ipcRenderer without exposing the entire object
// contextBridge.exposeInMainWorld('api', {
//   getWindows: (channel, data) => {
//     console.log(BrowserWindow);
//     return BrowserWindow.getAllWindows();
//   },
// });
