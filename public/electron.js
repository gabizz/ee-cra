const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require('url')
const isDev = require("electron-is-dev");

let reactWindow, expressWindow;

// require("update-electron-app")({
//   repo: "kitze/react-electron-example",
//   updateInterval: "1 hour"
// });

function createWindow() {
  reactWindow = new BrowserWindow({ show: true, width: 1200, height: 800 });
  expressWindow =  isDev 
    ?  new BrowserWindow({show: true, width: 800, height: 600})
    :  new BrowserWindow({show: true, width: 800, height: 600})
  
  reactWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  expressWindow.loadURL(
      isDev 
        ? `file://${path.join(__dirname, "../express/index.html")}`
        :  `file://${path.join(__dirname, "../express/index.html")}`
    );
  expressWindow.webContents.openDevTools()

  reactWindow.on("closed", () => { app.quit();reactWindow = null; expressWindow = null });
  expressWindow.on("closed", () => { app.quit();reactWindow = null; expressWindow = null });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (reactWindow === null && expressWindow === null ) {
    createWindow();
  }
});
