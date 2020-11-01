const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require("electron-updater");
const rpc = require('discord-rich-presence')('756623176397750272');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
	app.quit();
}

const windowStateKeeper = require('electron-window-state');
const createWindow = () => {
  
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
    
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    //width: 800,
    //height: 600,
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: true,
      //webSecurity: false
    },
    //titleBarStyle: "hidden",
    frame: false
  });
  
  mainWindowState.manage(mainWindow);
  
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  
  // Maximize the window
  //mainWindow.maximize();
  
  // Open the DevTools
  //mainWindow.webContents.openDevTools();
  
  // Handle refreshes
  mainWindow.webContents.on('did-fail-load', () => {
  	mainWindow.loadFile(path.join(__dirname, 'index.html'));
  });
  
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow);
app.on('ready', function()  {
	createWindow();
	autoUpdater.checkForUpdatesAndNotify();
});	

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('quit', () => {
	// Quit.
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on('status', function(e, value) {
	setPresence(value.place, 'Connected as ' + value.person);
});

function setPresence(details, state) {
	rpc.updatePresence({
		details: details,
		state: state,
		largeImageKey: 'terminal_land_icon_discord',
		largeImageText: 'Terminal Land',
    startTimestamp: Date.now(),
    instance: 1,
	})
}

setPresence('Nowhere Land', 'Disconnected');