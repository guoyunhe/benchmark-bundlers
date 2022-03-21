const ESBuildMinifierWebpackPlugin = require("esbuild-minifier-webpack-plugin");

module.exports = {
  mode: "production",
  entry: __dirname + "/sample.js",
  output: {
    path: __dirname + "/dist/webpack",
  },
  optimization: {
    minimizer: [new ESBuildMinifierWebpackPlugin()],
  },
};
