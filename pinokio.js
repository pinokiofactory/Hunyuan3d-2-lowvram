const path = require('path')
module.exports = {
  version: "3.4.0",
  title: "Hunyuan3D-2-LowVRAM",
  description: "Text/Image to 3D (Cross Platform: Mac + Windows + Linux): High-Resolution 3D Assets Generation with Large Scale Hunyuan3D Diffusion Models. https://github.com/deepbeepmeep/Hunyuan3D-2GP",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        if (kernel.platform === "darwin") {
          return [{
            icon: "fa-solid fa-power-off",
            text: "Hunyuan3D-2-mini-Turbo",
            href: "start.js",
            params: {
              platform: kernel.platform 
            }
          }, {
            icon: "fa-solid fa-power-off",
            text: "Hunyuan3D-2-MV-Turbo (Multi View)",
            href: "start.js",
            params: {
              platform: kernel.platform,
              model_path: "tencent/Hunyuan3D-2mv",
              subfolder: "hunyuan3d-dit-v2-mv-turbo"
            }
          }, {
            icon: "fa-solid fa-plug",
            text: "Update",
            href: "update.js",
          }, {
            icon: "fa-solid fa-plug",
            text: "Install",
            href: "install.js",
          }, {
            icon: "fa-regular fa-circle-xmark",
            text: "Reset",
            href: "reset.js",
          }]
        } else {
          return [{
            icon: "fa-solid fa-power-off",
            text: "Hunyuan3D-2mini (Small)",
            menu: [{
              icon: "fa-solid fa-cube",
              text: "Original",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "1"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "2"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "3"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "4"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 24GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "5"
                }
              }]
            }, {
              icon: "fa-solid fa-bolt-lightning",
              text: "Turbo",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "1",
                  mode: "--turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "2",
                  mode: "--turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "3",
                  mode: "--turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "4",
                  mode: "--turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 24GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "5",
                  mode: "--turbo"
                }
              }]
            }]
          }, {
            icon: "fa-solid fa-power-off",
            text: "Hunyuan3D-2mv (Multi View)",
            menu: [{
              icon: "fa-solid fa-cube",
              text: "Original",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "1",
                  mode: "--mv"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "2",
                  mode: "--mv"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "3",
                  mode: "--mv"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "4",
                  mode: "--mv"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 24GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "5",
                  mode: "--mv"
                }
              }]
            }, {
              icon: "fa-solid fa-bolt-lightning",
              text: "Turbo",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "1",
                  mode: "--mv --turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "2",
                  mode: "--mv --turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "3",
                  mode: "--mv --turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "4",
                  mode: "--mv --turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 24GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "5",
                  mode: "--mv --turbo"
                }
              }]
            }]
          }, {
            icon: "fa-solid fa-power-off",
            text: "Hunyuan3D-2 (Full)",
            menu: [{
              icon: "fa-solid fa-cube",
              text: "Original",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "1",
                  mode: "--h2"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "2",
                  mode: "--h2"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "3",
                  mode: "--h2"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "4",
                  mode: "--h2"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 24GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "5",
                  mode: "--h2"
                }
              }]
            }, {
              icon: "fa-solid fa-bolt-lightning",
              text: "Turbo",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "1",
                  mode: "--h2 --turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 48GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "2",
                  mode: "--h2 --turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 12GB VRAM",
                href: "start.js",
                params: {
                  profile: "3",
                  mode: "--h2 --turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 32GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "4",
                  mode: "--h2 --turbo"
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "Start 24GB RAM + 6GB VRAM",
                href: "start.js",
                params: {
                  profile: "5",
                  mode: "--h2 --turbo"
                }
              }]
            }]
          }, {
            icon: "fa-solid fa-plug",
            text: "Update",
            href: "update.js",
          }, {
            icon: "fa-solid fa-plug",
            text: "Install",
            href: "install.js",
          }, {
            icon: "fa-regular fa-circle-xmark",
            text: "Reset",
            href: "reset.js",
          }]
        }
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
