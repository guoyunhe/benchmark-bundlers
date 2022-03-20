const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    web: __dirname + "/sample.js",
  },
  output: {
    path: __dirname + "/dist/spack",
  },
  module: {},
  options: {
    minify: true,
  },
});
