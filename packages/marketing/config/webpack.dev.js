const {merge} = require('webpack-merge'); // it allows us to merge two webpack configuration files
const HtmlWebpackPlugin = require('html-webpack-plugin'); // inject script tags into our HTML file
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common'); // common configuration for both development and production
const dependencies = require('../package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, devConfig);

