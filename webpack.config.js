/**
 * Created by shumandi on 2016/12/5.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/index.js')],
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: 'index.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        },{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};