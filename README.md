```markdown
# DisparatGPT Desktop 🌟

![DisparatGPT Desktop](./assets/systemLogo.png)

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/nvpanda/disparatgpt_desktop/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux%20%7C%20Android%20%7C%20FreeBSD-lightgrey.svg)](https://github.com/nvpanda/disparatgpt_desktop)
[![Electron](https://img.shields.io/badge/Electron-v32.0.1-green.svg)](https://electronjs.org/)

**DisparatGPT Desktop** é um aplicativo simples que redireciona para o ChatGPT da OpenAI, otimizado para uso em desktops. Funciona em **Windows**, **macOS**, **Linux**, **Android**, **FreeBSD** e **dispositivos móveis**.

---

## 📦 Recursos

- **Compatível com múltiplas plataformas**: Windows, macOS, Linux, FreeBSD e Android.
- **Executa no ambiente desktop**: Uma maneira simples de acessar o ChatGPT diretamente do seu desktop.
- **Atualizações automáticas**: Com suporte ao `electron-updater`.
- **Configuração personalizável**: Inclui suporte para as principais distribuições Linux (.deb, .rpm, AppImage, Flatpak, Snap).

---

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js v14 ou superior
- NPM ou Yarn

### Clonando o Repositório

```bash
git clone https://github.com/nvpanda/disparatgpt_desktop.git
cd disparatgpt_desktop
```

### Instalação de Dependências

```bash
npm install
```

### Executando o App

```bash
npm start
```

### Criando Pacotes de Distribuição

Crie pacotes para diferentes plataformas com:

```bash
npm run make
```

Os pacotes gerados estarão na pasta `dist`.

---

## 🌍 Suporte a Plataformas

O DisparatGPT Desktop suporta as seguintes plataformas:

- **Windows**: `.exe` via Squirrel
- **macOS**: `.dmg` e `.zip`
- **Linux**: `.deb`, `.rpm`, AppImage, Flatpak, Snap
- **FreeBSD**: Executável compatível com o layer de compatibilidade Linux
- **Android**: Recomendado o uso de um PWA ou via Emuladores Linux

---

## 🛠 Configuração Avançada

### Ícones Personalizados

Para personalizar o ícone do aplicativo, substitua os arquivos em `./assets/systemLogo.*` pelos seus ícones:

- `.ico` para Windows
- `.icns` para macOS
- `.png` para Linux

### Compilação de TypeScript

Certifique-se de compilar o TypeScript antes de executar:

```bash
npm run compile
```

### Publicação

Para publicar o aplicativo no GitHub Releases:

```bash
npm run publish
```

---

## 🐛 Relatório de Problemas

Encontrou um bug? Abra uma issue em [GitHub Issues](https://github.com/nvpanda/disparatgpt_desktop/issues).

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

## 👤 Autor

**NVPanda**

- GitHub: [@nvpanda](https://github.com/nvpanda)
- LinkedIn: [NVPanda](https://www.linkedin.com/in/nvpanda/)

---

⭐ **Sinta-se à vontade para dar uma estrela neste repositório se este projeto foi útil para você!** ⭐
```

### Destaques do `README.md`

1. **Visual Atrativo**: Uso de badges e imagens para tornar o documento mais atraente visualmente.
2. **Seções Claras**: Divisão clara das seções para fácil navegação, com uma estrutura lógica que guia o usuário desde a instalação até a configuração avançada.
3. **Interatividade**: Links para issues, GitHub Releases, e perfil do autor tornam o documento mais dinâmico.
4. **Chamadas para Ação**: Convite para dar estrela no repositório, e para reportar problemas, incentivando a interação com a comunidade.

Este `README.md` deve fornecer todas as informações necessárias para que os usuários possam começar a usar o DisparatGPT Desktop rapidamente, enquanto também oferece opções para personalizações e contribuições.