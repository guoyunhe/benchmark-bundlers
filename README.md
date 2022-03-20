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

1. esbuild: 0.249s (with esbuild compiler)
2. spack: 1.082s (with swc compiler)
3. parcel: 18.269s (with swc compiler)
4. webpack: 24.855s
5. rollup: 28.606s

### MacBook Pro 16 (2019)

System information:

- CPU: i7-9750H
- RAM: 16 GB 2667 MHz DDR4
- Node: 16.14.0
- OS: macOS Monterey 12.2.1

Benchmark results:

1. esbuild: 0.227s (with esbuild compiler)
2. spack: 1.012s (with swc compiler)
3. parcel: 13.784s (with swc compiler)
4. webpack: 16.897s
5. rollup: 20.729s

## Conclusion

> Only based on my test, may be not true for your real-world projects

esbuild just goes beyond our imagination. It is 74~100 times faster than webpack
and does more code transpiling work. In performance perspective, esbuild has no
rival. esbuild is written in Go language and compiled into native binary, which
explains the out-standing performance compared to tools written in JS.

spack, or swcpack, though not as fast as esbuild, still left all other tools far
behind. Similar to esbuild, it is written in Rust and compiled into native binary.
Unlike esbuild, spack is still experimental. We expect the stable version will be
even faster.

parcel v2 does the best among traditional bundlers written in JS. We have many
reasons to recommended parcel. However, bundling speed isn't its strongest point.
Does 20~30% speed over webpack v5 worth the effort to adopt a totally different
eco-system? Probably not.

rollup, in our test, looks slower than webpack. This might be caused by the limited
numbers of plugins and loaders. In real-world projects with tens of plugins, the
advantage of rollup may eventually show up.
