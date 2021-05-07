const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FontPreloadPlugin = require('webpack-font-preload-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new FontPreloadPlugin({
                extensions: ['woff2'],
            }),
            // new BundleAnalyzerPlugin(),
            new VuetifyLoaderPlugin(),
        ],
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
