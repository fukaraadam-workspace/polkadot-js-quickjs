# Polkadot.js wrapper for QuickJS engine

> **Warning:** This is a work in progress.

> **Warning 2:** WebSocket is needed in @polkadot/api, but QuickJS doesn't provide one. Either use custom QuickJS with websocket or provide a WebSocket object from entegration.

This is aimed to be wrapper for the [@polkadot/api](https://github.com/polkadot-js/api) npm package, which allows you to use it in the [QuickJS](https://bellard.org/quickjs/) engine. Ultimately, this was planned to be used in [Godot-JS](https://github.com/Geequlim/ECMAScript)

- [x] Babel plugins used to transpile the code, which QuickJS can't understand (class-static-block)
- [x] `core-js` package is used to polyfill the code (URL polyfill)
- [x] Webpack used to bundle the code
- [x] QuickJS throws `TypeError: out-of-bound numeric index` when trying to assign value to unavailable key of an object (e.g. Uint8Array). This is ignored on browsers and node, but not in QuickJS.
  - See `./src/problem.js` for a simple example
