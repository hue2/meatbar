const path = require('path');
const webpack = require('webpack');
const HWP = require('html-webpack-plugin');
const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env')
});

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
        ]
    },
    plugins: [
        new HWP(
            { 
                template: path.join(__dirname, '../index.html')
            }
        ),
        new webpack.EnvironmentPlugin({
            api_url: 'http://hueto.xyz:6078',
        })
    ]
}