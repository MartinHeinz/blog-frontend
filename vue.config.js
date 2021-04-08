const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FontPreloadPlugin = require("webpack-font-preload-plugin");

module.exports = {
    configureWebpack: {
        plugins: [new FontPreloadPlugin()],
        optimization: {
            usedExports: true,
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                    },
                }),
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
            },
            mangleWasmImports: true,
        },
    },
    runtimeCompiler: true,
};
