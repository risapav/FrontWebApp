/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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

