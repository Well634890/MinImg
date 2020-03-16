## 初衷

活动单页、推广页、展示类页面，图片素材多，又时常更新，UI那边提供的图片体积太大，需要适当压缩；  

或者项目开发完成，统一处理一下图片资源，就可以关闭项目 `build` 时的压缩，大大节省构建时间；

## 简介

基于 `webpack4`、`image-webpack-loader` 和 `url-loader`，配合 `clean-webpack-plugin` ，构建本工具  

## 安装、使用

`yarn install` 

`yarn min`

在 `src/img` 中添加图片；

在 `index.js` 中引入需要处理的图片；

修改 `webpack.config.js` 中 `module` 下的 `quality` 来控制压缩质量（百分比）；

修改 `webpack.config.js` 中 `module` 下的 `outputPath` ，改变输出路径；
