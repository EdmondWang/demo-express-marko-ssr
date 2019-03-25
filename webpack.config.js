'use strict';
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    // Add source map support
    devtool: "#cheap-source-map",
    entry: __dirname + "/src/pages/home/client.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko'],
        modules: ['./', 'node_modules']
    },
    module: {
        rules: [{
                test: /\.marko$/,
                loader: 'marko-loader'
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
                query: {
                    name: 'static/images/[hash].[ext]',
                    publicPath: '/'
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation failed:
        new webpack.NoEmitOnErrorsPlugin(),

        // Write out CSS bundle to its own file:
        new MiniCssExtractPlugin({
            filename: `components/[name].css`
        })
    ]
};