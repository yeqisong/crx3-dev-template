# crx3-dev-template

chrome extension 项目开发模板文件，用于快速搭建基于 vite2+vue3 开发 chrome 拓展的基础项目。

## 使用场景

本 template 用于 [chrome-extension-devlop-cli (crx3-cli)](https://github.com/yeqisong/chrome-extension-develop-cli)，在 crx3 init 时，拉取本模板构建基础项目结构。

## 项目开发

本项目结构搭建后，基于以下技术开发 chrome 拓展：

-   javaScript
-   vite2+vue3

默认集成 [vite-plugin-vue-crx3](https://github.com/yeqisong/vite-plugin-vue-crx3) 插件，支持开发过程中源码修改时拓展热重载和页面自动刷新。

## 结构说明

```text
|-.vscode // 项目vscode设置，主要有一个快速输入vue3页面的结构
|-public // 一般拓展的语言包放在里面
|-src
|--|-manifest.json // 开发环境中拓展的manifest.json，作为项目的入口文件
|--|-libs // 拓展开发相关的源码都放在libs中（个人习惯，只要在manifest中路径正确即可，不一定需要一个libs
|--|--|-popup.html // popup页面，即popup的入口文件
|--|--|-popup // 文件夹，popup的相关vue开发文件
|......
|-vite.config.js 开发配置文件，一般不需要修改，主要定义了入口文件为manifest.json

```
