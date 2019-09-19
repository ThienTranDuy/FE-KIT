/*
**  Require library in node_modules
*/

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');

/*
**  MODE COMMON
*/

module.exports = {

    /*
    **  File javascript resource
    */

    entry: {
        tranduythien: './src/index.js',
    },

    /*
    **   Config filename javascript when build
    */

    output: {
        filename: './asset/script/[name].[hash:9].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },

    /*
    **   Settup complier
    */

    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader'
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                'xml-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: path.resolve(__dirname, "src/"),
                            outputPath: 'dist/',
                            publicPath: '../',
                            useRelativePaths: true
                        }
                    }
                ]
            }
        ]
    },

    /*
    **   Setting plugin of build-web-tool
    */

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            { from: './src/asset/favicon', to: './asset/favicon' },
            { from: './src/asset/webfonts', to: './asset/webfonts' },
            { from: './src/asset/img', to: './asset/img' }
            ]),
        new MiniCssExtractPlugin({
            filename: './asset/style/[name].[hash:9].css',
        }),
        new WebpackNotifierPlugin({
            title: 'Webpack'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        //////////////////////////////// Page main
        // Index page
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/view/index.pug',
            inject: true
        }),
        // About page
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/view/about.pug',
            inject: true
        }),
    ]
};
