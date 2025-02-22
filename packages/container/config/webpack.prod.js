const { merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const dependencies = require('../package.json').dependencies;

const domain = process.env.PRODUCTION_DOMAIN; // this will be set during the CI/CD pipeline

const prodConfig = {
  mode: 'production', // makes optimizations for production
  output: {
    // ensures that whenever we build some file for production, all the different
    // files will use this as a template to figure out how to name them. This is done primarily for caching issues
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/', // this is the path where the files will be hosted
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ]
}

module.exports = merge(commonConfig, prodConfig);