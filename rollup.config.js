import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "sample.js",
  output: {
    file: "dist/rollup/main.js",
    format: "iife",
  },
  plugins: [resolve(), commonjs(), terser()],
};
