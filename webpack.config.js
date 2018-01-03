let path = require('path');

let webpack = require('webpack');

let HtmlWebpackPlugin = require('html-webpack-plugin');

let OpenBrowserPlugin = require('open-browser-webpack-plugin');

let __dirname = path.resolve(path.dirname(''));

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: ["babel-loader", 'eslint'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: {'loader': "url-loader?limit=5000"}
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: {'loader': "url-loader?limit=5000"}
            }
        ]
    },
    plugins: [
        // html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ],

    devtool: 'eval-source-map',

    devServer: {
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
};
