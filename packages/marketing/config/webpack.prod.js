const {merge} = require('webpack-merge'); // it allows us to merge two webpack configuration files
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common'); // common configuration for both development and production
const dependencies = require('../package.json').dependencies;

const prodConfig = {
  mode: 'production', // makes optimizations for production
  output: {
    filename: '[name].[contenthash].js'
  }, // ensures that whenever we build some file for production, all the different
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