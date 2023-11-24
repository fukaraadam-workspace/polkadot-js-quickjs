const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  // target: ['es2020'],
  // experiments: {
  //   outputModule: true,
  // },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'out'),
    // chunkFormat: 'commonjs', // or 'array-push'
    // libraryTarget: 'module'
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        // exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.mjs']
  },
};