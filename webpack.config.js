/*
*
* THIS IS THE WEBPACK CORE CONFIG FILE
*
* FUNCTIONALITY:
* - Bundles all JS
* - Outputs JS errors / warning using JShint
* - Transpiles ES5 to ES6 using Babel NOTE: ONLY .ES6 files while be transpiled!
* - TODO Builds SASS
*
*/

module.exports = {
	entry: './src/app.es6',
	output: {
		path: './dist',
  	filename: 'app.bundle.js',
  },
	module: {
		preLoaders: [
			{
				test: /\.es6\.js$/,
				include: __dirname + '/src',
				loader: 'jshint-loader',
				query: {
					esversion: 6
				}
	 		}],
		loaders: [

			//TRANSPILE ES6
			{
        test:   /\.es6/,
        loader: 'babel',
        include: __dirname + '/src',
				query: {
          // cacheDirectory: true,
          presets: ['es2015']
       		}
				},

			//SASS
			{
				test: 	/\.scss/,
				loader: 'style!css!sass',
				include: __dirname + '/src/styles',
			},

			]
	},
	// plugins: [
	// ],
	devServer: {
		contentBase: __dirname + '/dist',
	}
 }
