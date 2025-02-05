const {merge} = require('webpack-merge'); // it allows us to merge two webpack configuration files
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common'); // common configuration for both development and production
const dependencies = require('../package.json').dependencies;

const prodConfig = {
  mode: 'production', // makes optimizations for production
  output: {
    // ensures that whenever we build some file for production, all the different
    filename: '[name].[contenthash].js',
    publicPath: '/marketing/latest/', // this is the path where the files will be hosted, so that our remoteEntry.js file can be accessed
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
  ]
}

module.exports = merge(commonConfig, prodConfig);