const fs = require('fs');
const { sources } = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 1. Make the wasm file available to the build system
      new (class CopySkiaPlugin {
        apply(compiler) {
          compiler.hooks.thisCompilation.tap('AddSkiaPlugin', (compilation) => {
            compilation.hooks.processAssets.tapPromise(
              {
                name: 'copy-skia',
                stage:
                  compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
              },
              async () => {
                const src = require.resolve(
                  'canvaskit-wasm/bin/full/canvaskit.wasm'
                );
                if (compilation.getAsset(src)) {
                  // Skip emitting the asset again because it's immutable
                  return;
                }
                compilation.emitAsset(
                  '/canvaskit.wasm',
                  new sources.RawSource(await fs.promises.readFile(src))
                );
              }
            );
          });
        }
      })(),
      // 2. Polyfill fs and path module from node
      new NodePolyfillPlugin(),
    ],
    // externals: {
    //   // 3. Avoid warning if reanimated is not present
    //   'react-native-reanimated': "require('react-native-reanimated')",
    //   'react-native-reanimated/package.json':
    //     "require('react-native-reanimated/package.json')",
    // },
  };
};
