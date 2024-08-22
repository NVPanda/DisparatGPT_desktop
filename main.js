"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var tray = null;
var mainWindow = null;
var createWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
        width: 1024,
        height: 720,
        thickFrame: true,
        frame: false,
        opacity: 0.9,
        resizable: true,
        fullscreen: true,
        backgroundColor: "#ffff",
        icon: path.join(__dirname, "assets", "systemLogo.png")
    });
    mainWindow.loadURL("https://chat.openai.com/auth/login");
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
};
electron_1.app.on("ready", function () {
    var iconPath = path.join(__dirname, "assets", "systemLogo.png");
    tray = new electron_1.Tray(electron_1.nativeImage.createFromPath(iconPath));
    var contextMenu = electron_1.Menu.buildFromTemplate([
        { label: "Abrir", type: "normal", click: function () { return createWindow(); } },
        { label: "Maximizar", type: "normal", click: function () { return mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.maximize(); } },
        { label: "Minimizar", type: "normal", click: function () { return mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.minimize(); } },
        { label: "Sair", type: "normal", click: function () { return electron_1.app.quit(); } },
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
electron_1.app.on("activate", function () {
    if (!mainWindow) {
        createWindow();
    }
});
electron_1.app.on("certificate-error", function (event, webContents, url, error, certificate, callback) {
    if (url === "https://chat.openai.com/auth/login") {
        // Lógica de verificação de certificado
        event.preventDefault();
        callback(true);
    }
    else {
        callback(false);
    }
});
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin" &&
        process.platform !== "linux" &&
        process.platform !== "win32" &&
        process.platform !== "android") {
        electron_1.app.quit();
    }
});
// Lógica para verificar se o site está acessível antes de iniciar o aplicativo
var checkSiteAvailability = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch("https://chat.openai.com/auth/login")];
            case 1:
                response = _a.sent();
                if (response.ok) {
                    console.log("Site está acessível. Iniciando aplicativo...");
                    createWindow(); // Inicia o aplicativo se o site estiver acessível
                }
                else {
                    console.error("O site não está acessível. Verifique a conexão ou tente novamente mais tarde.");
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Erro ao verificar a disponibilidade do site:", error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
checkSiteAvailability();
