const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    height: 500,
    width: 800,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
