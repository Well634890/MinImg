/**
 * Created by Well
 * Date-Time: 2020-03-16
 * E-mail: well634890@126.com
 */

/* require.context(directory, useSubdirectories, regExp)
* @param {String} directory 搜索的目录
* @param { useSubdirectories} 是否搜索其子目录，可选，默认为true
* @param { regExp} 匹配文件的正则表达式，可选
* */

/*
*   png: /\.png$/i
*   jpg jpeg: /\.jpe?g$/i
*   gif: /\.gif$/i
*   svg: /\.svg$/i
*   all: /\.(gif|png|jpe?g|svg)$/i
* */

const pngs = require.context('./src/img', true, /\.png$/i)
