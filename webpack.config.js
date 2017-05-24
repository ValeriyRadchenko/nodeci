const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const isProduction = (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production');

module.exports = {
    devtool: !isProduction && 'source-map',
    entry: path.resolve(__dirname, 'client', 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    watch: !isProduction,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [{
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'client', 'src', 'index.html'),
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    
};

if (isProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    )
}