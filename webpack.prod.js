const webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    entry: "./public/index.js",
    output: {
        path: __dirname + "/public/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compress: {
            unused: true,
            dead_code: true,
            warnings: false,
            screw_ie8: true
          },
          compressor: {
            warnings: false
          }
        })
      ]
};