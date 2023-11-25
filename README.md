# Polkadot.js wrapper for QuickJS engine

> **Warning:** Unfortunately, this project is not working at the moment. In many places in polkadot.js, object sizes (like Uint8Array) somehow dynamically increased and this causes "TypeError: out-of-bound numeric index" in QuickJS (Although it silently ignores those in browsers or node). Added a simple example for that error in `./src/problem.js` and more detailed one in `./src/wasm-util-problem/pol-problem.js`. I'm not sure if it's possible to make it work, or other problems would emerge, but I'm leaving it here for the future reference.

This was aimed to be wrapper for the [@polkadot/api](https://github.com/polkadot-js/api) npm package, which allows you to use it in the [QuickJS](https://bellard.org/quickjs/) engine. Ultimately, this was planned to be used in [Godot-JS](https://github.com/Geequlim/ECMAScript)

- [x] Babel plugins used to transpile the code, which quickjs can't understand
- [x] `core-js` package is used to polyfill the code
- [x] Webpack used to bundle the code
