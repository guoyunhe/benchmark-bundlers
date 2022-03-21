# Benchmark Bundlers

Compare performance of webpack, rollup, parcel, esbuild and spack(swcpack)

## Sample Code

antd + lodash + react + react-dom + three.js

## Output Standard

- Bundled into one JS file
- IIFE format output
- Minified without source maps, use esbuild as minifier except for spack

## Test Devices

### ThinkPad T480

System information:

- CPU: i7-8550U
- RAM: 32 GB 2667 MHz DDR4
- Node: 16.14.1
- OS: openSUSE Tumbleweed Linux 5.16.14

Benchmark results:

1. esbuild: 0.249s (with esbuild minifier)
2. spack: 1.082s (with swc minifier)
3. webpack: 5.347s (with esbuild minifier)
4. parcel: 6.069s (with esbuild minifier)
5. rollup: 14.548s (with esbuild minifier)

### MacBook Pro 16 (2019)

System information:

- CPU: i7-9750H
- RAM: 16 GB 2667 MHz DDR4
- Node: 16.14.0
- OS: macOS Monterey 12.2.1

Benchmark results:

1. esbuild: 0.227s (with esbuild minifier)
2. spack: 1.012s (with swc minifier)
3. webpack: 4.229s (with esbuild minifier)
4. parcel: 5.225s (with esbuild minifier)
5. rollup: 12.790s (with esbuild minifier)

## Summary

Only based on my test, may be not true for your real-world projects.
