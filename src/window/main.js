const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '../index.html'),
      protocol: 'file:',
      slashes: true,
    });
  mainWindow = new BrowserWindow({
    width: 600,
    height: 328,
    minWidth: 600, // set a min width!
    minHeight: 328, // and a min height!
    frame: false,
    titleBarStyle: 'hidden',
    minimizable: false,
    maximizable: false,
    resizable: false,
    focusable: false,
    fullscreen: true,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'preload.js'), // use a preload script
    },
  });
  mainWindow.loadURL(startUrl);
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// preload.js related events
ipcMain.on('close-window-event', (event, arg) => {
  mainWindow.close();
});
ipcMain.on('toggle-mouse-ignore', (event, state) => {
  if (state) {
    mainWindow.setIgnoreMouseEvents(state, { forward: true });
  } else {
    mainWindow.setIgnoreMouseEvents(state);
  }
});

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
