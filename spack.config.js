const { config } = require("@swc/core/spack");

module.exports = config({
  mode: "production",
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
