const webpack = require('webpack');
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },

    plugins: [
        // new webpack.optimize.LimitChunkCountPlugin({
        //     maxChunks: 1,
        // }),
    ]
};
