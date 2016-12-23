/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const webpack = require('webpack');
//var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'bundle.js'
    },
    loaders: [
        { test: /\.jade$/, loader: "jade" },
        // => "jade" loader is used for ".jade" files
        { test: /\.css$/, loader: "style!css" },
        // => "style" and "css" loader is used for ".css" files
        // Alternative syntax:
        { test: /\.css$/, loaders: ["style", "css"] }
    ], 
    plugins: [
/*        
        new webpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
            debug: true,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })
*/        
        
        
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
        
    ]
};

