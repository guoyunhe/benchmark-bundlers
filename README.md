# Benchmark Bundlers

Compare performance of webpack, rollup, parcel, esbuild and spack(swcpack)

## Sample Code

antd + lodash + react + react-dom + three.js

## Output Standard

- Bundled into one JS file
- IIFE format
- Minified without source maps

## Test Devices

### ThinkPad T480

System information:

- CPU: i7-8550U
- RAM: 32 GB 2667 MHz DDR4
- Node: 16.14.1
- OS: openSUSE Tumbleweed Linux 5.16.14

Benchmark results:

1. esbuild: 0.249s (with compiler)
2. spack: 1.082s (with compiler)
3. parcel: 18.269s (with compiler)
4. webpack: 24.855s
5. rollup: 28.606s

### MacBook Pro 16 (2019)

System information:

- CPU: i7-9750H
- RAM: 16 GB 2667 MHz DDR4
- Node: 16.14.1
- OS: macOS Big Sur 11.6

Benchmark results:

1. esbuild: ? (with compiler)
2. spack: ? (with compiler)
3. parcel: ? (with compiler)
4. webpack: ?
5. rollup: ?
