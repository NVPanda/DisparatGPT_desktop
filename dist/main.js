"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
let tray = null;
let mainWindow = null;
const createWindow = () => {
    mainWindow = new electron_1.BrowserWindow({
        width: 1024,
        height: 720,
        thickFrame: true,
        frame: false,
        opacity: 0.9,
        resizable: true,
        fullscreen: true,
        backgroundColor: "#ffff",
        icon: path_1.default.join(__dirname, "assets", "systemLogo.png"),
    });
    mainWindow.loadURL("https://chat.openai.com/auth/login");
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};
electron_1.app.on("ready", () => {
    const iconPath = path_1.default.join(__dirname, "assets", "systemLogo.png");
    tray = new electron_1.Tray(electron_1.nativeImage.createFromPath(iconPath));
    const contextMenu = electron_1.Menu.buildFromTemplate([
        { label: "Abrir", type: "normal", click: () => createWindow() },
        { label: "Maximizar", type: "normal", click: () => mainWindow?.maximize() },
        { label: "Minimizar", type: "normal", click: () => mainWindow?.minimize() },
        { label: "Sair", type: "normal", click: () => electron_1.app.quit() },
    ]);
    tray.setContextMenu(contextMenu);
    tray.setToolTip("Your wonderful community");
    tray.setTitle("Disparat Techno");
    // Exibir notificação no Tray
    tray.displayBalloon({
        icon: iconPath,
        title: "Aplicativo Minimizado",
        content: "Iniciando minimizado"
    });
});
electron_1.app.on("activate", () => {
    if (!mainWindow) {
        createWindow();
    }
});
electron_1.app.on("certificate-error", (event, webContents, url, error, certificate, callback) => {
    if (url === "https://chat.openai.com/auth/login") {
        // Lógica de verificação de certificado
        event.preventDefault();
        callback(true);
    }
    else {
        callback(false);
    }
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin" &&
        process.platform !== "linux" &&
        process.platform !== "win32" &&
        process.platform !== "android") {
        electron_1.app.quit();
    }
});
// Lógica para verificar se o site está acessível antes de iniciar o aplicativo
const checkSiteAvailability = async () => {
    try {
        const response = await fetch("https://chat.openai.com/auth/login");
        if (response.ok) {
            console.log("Site está acessível. Iniciando aplicativo...");
            createWindow(); // Inicia o aplicativo se o site estiver acessível
        }
        else {
            console.error("O site não está acessível. Verifique a conexão ou tente novamente mais tarde.");
        }
    }
    catch (error) {
        console.error("Erro ao verificar a disponibilidade do site:", error);
    }
};
checkSiteAvailability();
//# sourceMappingURL=main.js.map