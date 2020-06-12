'use strict'

import { app, protocol, BrowserWindow, ipcMain} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

const isDevelopment = process.env.NODE_ENV !== 'production'

let win
let home
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ 
    width: 400, 
    height: 500, 
    title:"iniciar sesion",
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    } 
  })

  home = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    title: "sistema renap", 
    show: false, 
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    } 
  })
  

  // configs
  win.menuBarVisible = false
  win.maximizable = false
  win.resizable = false

  home.menuBarVisible = false

  if (process.env.WEBPACK_DEV_SERVER_URL) {

    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    home.loadURL(process.env.WEBPACK_DEV_SERVER_URL + '/#/home')

    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')

    win.loadURL('app://./index.html')
    home.loadURL('app://./index.html#home')
  }

  win.on('closed', () => {
    win = null
  })

  home.on('closed', () => {
    home = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}


ipcMain.on('login', (event, arg) => {
  if(arg == "off"){
    home.hide();
    win.show();
  }else{
    win.hide();
    home.show();
  }
})