const { merge } = require('webpack-merge')
const spawn = require('child_process').spawn

const baseConfig = require('./webpack.renderer.config')

module.exports = merge(baseConfig, {
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        port: 2003,
        compress: true,
        historyApiFallback: {
            verbose: true,
            disableDotRule: false
        }
    }
})
