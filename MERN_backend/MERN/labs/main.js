const { app, BrowserWindow, ipcMain } = require('electron');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Set the API key for VirusTotal
const API_KEY = "2cda7970a44b6895ad08afabfb7e7fe2baf6db3e6861ed00ace59b60af8ac721";

// Create main window
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load index.html
    mainWindow.loadFile('index.html');

    // Open DevTools
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Listen for app to be ready
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

function scanFile(file_path) {
    try {
        // Read the file contents
        const file_content = fs.readFileSync(file_path);

        // Send the file to VirusTotal for scanning
        const formData = new FormData();
        formData.append('file', file_content, path.basename(file_path));
        
        axios.post('https://www.virustotal.com/vtapi/v2/file/scan', formData, {
            params: { apikey: API_KEY },
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(response => {
            const scan_id = response.data.scan_id;
            // Check the scan report every 5 seconds until it's complete
            const intervalId = setInterval(() => {
                axios.get('https://www.virustotal.com/vtapi/v2/file/report', {
                    params: { apikey: API_KEY, resource: scan_id }
                })
                .then(response => {
                    const result = response.data;
                    if ('scan_date' in result && result.scan_date !== '1970-01-01 00:00:00') {
                        clearInterval(intervalId);
                        // Send scan results to the renderer process
                        mainWindow.webContents.send('scan-results', result.scans);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }, 5000);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Listen for file scan request from renderer process
ipcMain.on('scan-file', (event, file_path) => {
    scanFile(file_path);
});

// Expose VirusTotal API key to renderer process
ipcMain.on('get-api-key', (event) => {
    event.returnValue = API_KEY;
});
