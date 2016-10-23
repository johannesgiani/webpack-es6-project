/*
*
* THIS IS THE CONFIG FILE FOR PRODUCTION
*
* Run with webpack --config-file webpack-production.config.js
*
* NOTE: webpack -p does automatically minify js
*
* FUNCTIONALITY:
* - Remove console.log
*
*/

var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js'); //Extends the default configuration

var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
