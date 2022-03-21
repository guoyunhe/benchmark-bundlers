import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: "sample.js",
  output: {
    file: "dist/rollup/main.js",
    format: "iife",
  },
  plugins: [resolve(), commonjs(), esbuild({ minify: true })],
};
