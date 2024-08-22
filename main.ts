import { app, BrowserWindow, Tray, Menu, nativeImage, Event, WebContents, Certificate } from 'electron';
import * as path from 'path';

let tray: Tray | null = null;
let mainWindow: BrowserWindow | null = null;

const createWindow = (): void => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 720,
        thickFrame: true,
        frame: false,
        opacity: 0.9,
        resizable: true,
        fullscreen: true,
        backgroundColor: "#ffff",
        icon: path.join(__dirname, "assets", "systemLogo.png"),
    });

    mainWindow.loadURL("https://chat.openai.com/auth/login");

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

app.on("ready", () => {
    const iconPath = path.join(__dirname, "assets", "systemLogo.png");
    tray = new Tray(nativeImage.createFromPath(iconPath));

    const contextMenu = Menu.buildFromTemplate([
        { label: "Abrir", type: "normal", click: () => createWindow() },
        { label: "Maximizar", type: "normal", click: () => mainWindow?.maximize() },
        { label: "Minimizar", type: "normal", click: () => mainWindow?.minimize() },
        { label: "Sair", type: "normal", click: () => app.quit() },
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

app.on("activate", () => {
    if (!mainWindow) {
        createWindow();
    }
});

app.on("certificate-error", (
    event: Event,
    webContents: WebContents,
    url: string,
    error: string,
    certificate: Certificate,
    callback: (isTrusted: boolean) => void
) => {
    if (url === "https://chat.openai.com/auth/login") {
        // Lógica de verificação de certificado
        event.preventDefault();
        callback(true);
    } else {
        callback(false);
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin" &&
        process.platform !== "linux" &&
        process.platform !== "win32" &&
        process.platform !== "android") {
        app.quit();
    }
});

// Lógica para verificar se o site está acessível antes de iniciar o aplicativo
const checkSiteAvailability = async (): Promise<void> => {
    try {
        const response = await fetch("https://chat.openai.com/auth/login");
        if (response.ok) {
            console.log("Site está acessível. Iniciando aplicativo...");
            createWindow(); // Inicia o aplicativo se o site estiver acessível
        } else {
            console.error("O site não está acessível. Verifique a conexão ou tente novamente mais tarde.");
        }
    } catch (error) {
        console.error("Erro ao verificar a disponibilidade do site:", error);
    }
};

checkSiteAvailability();