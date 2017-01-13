/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var path = require("path");

const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


// webpack.config.js
var env = process.env.NODE_ENV;
var config = {
    entry: {
        vendor: ['jquery', 'backbone', 'backbone.marionette', 'underscore'],
        main: './src/main.js'
    },
    output: {
        path: './bin',
        filename: '[name].js' //['vendor.js','app.js']
//        publicPath: './static/',
//        library: 'myLib',
//        libraryTarget: "amd"
    },

    module: {
        
        rules: [
    //            {
    //                test: /\.js$/, 
    //                use: [{ loader: "babel-loader", options: { presets: ["es2015"] } }] 
    //            }
       
            {
                test: /\.(css|less)$/,
                loader: env.dev ? 'style!css!less' : ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!less-loader'
                })
            },

			{ 	test: /\.tpl$/, loader: "ejs-loader", query: { 
                    variable: 'data', 
                    interpolate : '\\{\\{(.+?)\\}\\}', 
                    evaluate : '\\[\\[(.+?)\\]\\]' 
				} 
			},

			{ test: /\.html$/, loader: 'html-loader', query: { minimize: false } }
                   
        ]
    }, 
    plugins: [
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
        new webpack.ProvidePlugin({ 
			$: 'jquery', 
			jQuery: 'jquery',
			_: "underscore" 
		})
    ],
    resolve: {
        alias: {
			Lib: path.resolve(__dirname, 'src/lib/'),
            App: path.resolve(__dirname, 'src/app/root/'),
            Footer: path.resolve(__dirname, 'src/app/footer/'),
            About: path.resolve(__dirname, 'src/app/about/'),
            Header: path.resolve(__dirname, 'src/app/header/')
        },
        modules: [
            'node_modules'
        ],
        extensions: ['.js','.json','.jsx','.css','.less', '.ejs', '.tpl']
    },
    target: 'web'
    
};
// the base configuration; 
if (env === 'production-single') {
    config.plugins.push( 
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            children:  false,
            async: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                screw_ie8: true
            }         
        }), 
        new webpack.optimize.DedupePlugin(),         
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: false,
                conservativeCollapse: false,
                minifyCSS: false,
                minifyJS: false
            },
            template: './src/index.html',
    //        chunks: ['vendor', 'main', 'common'],
            xhtml: true,
            inject: true
        })
 /*     ,  
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
*/                
    );  
}


if (env === 'production-multi') {
    console.log('config => ', env);
    config.plugins.push( 
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: ['vendor', 'main'],
            children:  true,
            async: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                screw_ie8: true
            }         
        }), 
        new webpack.optimize.DedupePlugin()
/*      ,  
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8})
*/      ,         
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: false,
                conservativeCollapse: false,
                minifyCSS: false,
                minifyJS: false
            },
            template: './src/index.html',
            chunks: ['vendor', 'main'],
            xhtml: true,
            inject: true
        })
    );  
}
 
if (env === 'development') {
    config.devtool = 'source-maps';
    config.watch === true; // automatically rebuild when files change
}

module.exports = config;
    
     