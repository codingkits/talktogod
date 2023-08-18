module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    // macOS 打包目标配置
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: {
        // macOS 相关配置...
        icon: './favicon.ico', // 替换为你的图标文件路径
      }
    },

    // Linux 打包目标配置
    {
      name: '@electron-forge/maker-deb',
      platforms: ['linux'],
      config: {
        name: 'talktogod_linux', // 应用程序的名称
        productName: 'talktogod_linux', // 产品名称
      }
    },

    // Windows 打包目标配置
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: {
        name: 'talktogo_win', // 应用程序的名称
        authors: 'talktogod', // 作者名称
        exe: 'talktogo_win.exe', // 可执行文件的名称
      },
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
