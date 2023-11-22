const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  optimization: {
    minimize: false
  },
  target: 'es2020',
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'out'),
    // chunkFormat: 'commonjs', // or 'array-push'
    // libraryTarget: 'module'
  },
  // resolve: {
  //   alias: {
  //     '@polkadot/x-fetch': require.resolve('cross-fetch'),
  //   },
  //   fallback: {
  //     "buffer": require.resolve("buffer/"),
  //     "util": require.resolve("util/"),
  //     "process": require.resolve("process/browser"),
  //     "stream": require.resolve("stream-browserify"),
  //   }
  // },
};