const path = require("path");

let config = {
  entry: {
    index: "./src/index.js",
  },
  // target: ['es2020'],
  // experiments: {
  //   outputModule: true,
  // },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "out"),
    // chunkFormat: 'commonjs', // or 'array-push'
    // libraryTarget: 'module'
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        // exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".mjs"],
  },
};

module.exports = (env) => {
  if (env.mode === "development") {
    config.mode = "development";
    config.devtool = "source-map";
    config.optimization = { minimize: false };
  } else {
    config.mode = "production";
    config.devtool = false;
    config.optimization = { minimize: true };
  }
  return config;
};
