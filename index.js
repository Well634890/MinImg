/**
 * Created by Well
 * Date-Time: 2020-03-16
 * E-mail: well634890@126.com
 */

/*
*   png: /\.png$/i
*   jpg jpeg: /\.jpe?g$/i
*   gif: /\.gif$/i
*   svg: /\.svg$/i
*   all: /\.(gif|png|jpe?g|svg)$/i
* */

const pngs = require.context('./src/img', true, /\.png$/i)
