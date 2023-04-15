var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    devtool: 'eval-cheap-source-map',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: path.join(__dirname, '.'),
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }]
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    }
};