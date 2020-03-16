/**
 * Created by Well
 * Date-Time: 2020-03-16
 * E-mail: well634890@126.com
 */

const path = require('path')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: "[name].[ext]",   //  图片资源 name 保持不变
                            limit: false,
                            quality: 90,    //  质量控制
                            outputPath: 'img'   //  输出目录
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()    //  每次构建，自动清理 dist 目录
    ]
}
