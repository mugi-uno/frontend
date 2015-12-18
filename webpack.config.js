var path = require("path");
var webpack = require("webpack");
var babel = require('babel-core/register');

module.exports = {
  entry : "./javascripts/entry.es6",

  output: {
    path : __dirname,
    filename : "dist/app.js"
  },

  resolve : {
    root: [
      path.join(__dirname, "javascripts/controllers"),
      path.join(__dirname, "javascripts/directives"),
      path.join(__dirname, "node_modules"),
    ],
    extensions: ["", ".js", ".es6"],
  },

  //plugins: [
  //  new webpack.optimize.UglifyJsPlugin({
  //    compress: {
  //      warnings: false
  //    }
  //  })
  //],

  module: {
    loaders: [
      {
        test: /\.es6?$/,
        exclude: /(node_modules)/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  }
}