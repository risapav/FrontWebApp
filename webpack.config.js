/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.js',
        publicPath: './static/'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            // Optionally extract less files
            // or any other compile-to-css language
//            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "less-loader") },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            { test: /\.jst$/, loader: 'underscore-template-loader' },
            { test: /\.png$/, loader: "file-loader" },    
            { test: /\.coffee$/, loader: "coffee-loader" }
        ],
        resolve: {
            extensions: [".web.coffee", ".web.js", ".coffee", ".js", '.jst', '.jsx', '.css', ".less"],
            modulesDirectories: [ 'node_modules' ]                    
        },
        rules: [
  //          {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },    

    plugins: [
        new ExtractTextPlugin('app.css'),
//        new FaviconsWebpackPlugin({logo:'./src/img/logo.png', inject: false}),
/*
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false }
        }),
*/      
/*        
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
*/
        
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                minifyCSS: true,
                minifyJS: true
            },
            template: './src/index.html'
        })
         
    ]
};

