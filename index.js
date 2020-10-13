const { app, BrowserWindow, screen, globalShortcut, ipcMain } = require('electron')

app.on('ready', () => {
	display = screen.getPrimaryDisplay();
	const { width, height } = screen.getPrimaryDisplay().workAreaSize
	win = new BrowserWindow({
		width: 400,
		height: 400,
		x: (width - 400)/2,
		y: (height - 400)/2,
		frame: false,
		webPreferences: {
			nodeIntegrations: true,
		},
	})
	win.loadFile('index.html')
	win.setAlwaysOnTop(true)
	globalShortcut.register('Escape', () => {
		win.close();
	})

})

ipcMain.on('resize', (event, arg) => {
	win.setSize(100, 100);
})
