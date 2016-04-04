/*
 * node packages required.
 */
var webpack = require("webpack"),
    path = require('path');

/*
 * Paths for the project:
 */
var entry = './src/js/main.js',
    includePath = path.join(__dirname, 'src/js'),
    templatePath = path.join(__dirname, 'build/templates'),
    nodeModulesPath = path.join(__dirname, 'node_modules'),
    outputPath = __dirname + '/build/public/assets/js/';

/*
 * Environment Variables.
 */
var PROD = JSON.parse(process.env.ENV_PROD || 0);
var env = 'dev',
    time = Date.now(),
    devtool = 'eval',
    debug = true,
    plugins = [
      // Avoid publishing files when compilation failed
      new webpack.NoErrorsPlugin(),
      // global variables accessible throughout JS:
      new webpack.DefinePlugin({
        __ENV__ : JSON.stringify(env),
        ___BUILD_TIME___: time
      })
      // new webpack.ProvidePlugin({
      //     $             : "zepto",
      //     jQuery        : "zepto",
      //     "window.$"    : "zepto"
      // })
    ];

/*
 * If production we are deploying slightly different compilation:
 */
if( PROD ){
  env = 'prod';
  devtool = 'hidden-source-map';
  debug = false;
  outputPath = __dirname + '/deploy/public/assets/js';


  uglifyOptions = {
      sourceMap: false,
      mangle: true,
      compress : {
          drop_console: true
      },
      output: {
          comments: false
      }
  };

  plugins.push( new webpack.optimize.UglifyJsPlugin(uglifyOptions) );

}


console.log( 'Webpack build - ENV: ' + env + ' V: ' + time );
console.log('    - outputPath ' , outputPath);
console.log('    - includePath ' , includePath );
console.log('    - nodeModulesPath ' , nodeModulesPath );
console.log('    - templatePath ' , templatePath );


module.exports = {

    // context: __dirname + contextFolder,

    stats: {
        // Nice colored output
        colors: true
    },

    debug   : debug,

    devtool : devtool,

    entry   : entry,

    output  : {
        path: outputPath,
        filename: '[name].js'
    },

    /*
     * webpack manages only JS and Templates,
     * unless we are including images, css, fonts, or files into the JS compiled.
     * we should use a sep script to load and manage css styling to keep this simpler
     */
    module  : {
        loaders : [
            {
              test: /\.js?$/,
              // exclude: /node_modules/,
              loader: 'babel-loader',
              // loader: 'babel-loader?optional=runtime',
              query: {
                  presets: ['es2015']
              },
              include: [
                  includePath, nodeModulesPath
              ]
            }
        ]
    },

    plugins: plugins,

    resolve: {
        alias: {
        }
    }
};
