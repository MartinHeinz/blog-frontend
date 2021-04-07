const ClosurePlugin = require('closure-webpack-plugin');  // npm install --save-dev closure-webpack-plugin google-closure-compiler

module.exports = {
    configureWebpack: {
        plugins: [
          new ClosurePlugin()  // alternatively use 'AGGRESSIVE_BUNDLE'
        ]
    },
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            css: {
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/',
            },
            postcss: {
                // options here will be passed to postcss-loader
            },
        },
    },
};
