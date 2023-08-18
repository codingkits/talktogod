# 官网地址

https://www.electronjs.org/zh/docs/latest/tutorial/quick-start

# 环境依赖

```shell
➜  ~ node -v
v18.17.0
➜  ~ npm -v
9.6.7
```

# 初始化应用

```shell
# init
mkdir AppName && cd AppName
npm init

# 将 electron 包安装到应用的开发依赖中。
npm install --save-dev electron

# run
npm start
```

# 打包并分发您的应用程序

```shell
# 1.将 Electron Forge 添加到您应用的开发依赖中，并使用其"import"命令设置 Forge 的脚手架：
npm install --save-dev @electron-forge/cli
npx electron-forge import

# 2.使用 Forge 的 make 命令来创建可分发的应用程序：
npm run make

# 3. 目前可以打包macOS的

# 4. Windows ?
npx electron-forge make --platform=win32 --target=zip

# 5. Linux ?
npx electron-forge make --platform=linux
```
