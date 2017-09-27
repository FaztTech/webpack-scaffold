const path = require('path');

// PLugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/bundle.min.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.ttf$/,
        loaders: [
          'url-loader'
        ]
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: [
          'url-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'photos.html',
      template: './src/photos.html',
      inject: 'head',
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: './src/img/',
        to: 'img/'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: './src/fonts/',
        to: 'fonts/'
      }
    ])
  ]
};
