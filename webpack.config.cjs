const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  target: ['es2020'],
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'out'),
    // chunkFormat: 'commonjs', // or 'array-push'
    // libraryTarget: 'module'
  },
  resolve: {
  //   alias: {
  //     '@polkadot/x-fetch': require.resolve('cross-fetch'),
  //   },
    // conditionNames: ["import", "require", "default"],
    conditionNames: ['import', 'browser', 'module', 'main'],
    fallback: {
      "buffer": require.resolve("buffer"),
  //     "util": require.resolve("util/"),
  //     "process": require.resolve("process/browser"),
  //     "stream": require.resolve("stream-browserify"),
    }
  },
};