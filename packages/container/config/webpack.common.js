module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Whenever we import a file that ends in .js or .mjs, we want to run it through babel-loader
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // Babel will process JSX and ES2015+ syntax and convert it to ES5
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ]
  }
}