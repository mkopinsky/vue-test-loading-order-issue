var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
  },
  output: {
    path: path.resolve(process.cwd(), 'web/dist'),
    publicPath: '/dist',
    filename: "[name].js", // but see below - in builds we add [chunkhash] to the filename
    library: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
