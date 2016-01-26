var ExtractText = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sassOptions = [
    'includePaths[]=./node_modules/compass-mixins/lib/',
].join("\n");

module.exports = {
    entry: {
        zombo: [
            './js/copyright.js',
            './js/newsletterLink.js',
            './style.scss'
        ]
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', include: __dirname + '/js' },
            {
                test: /\.scss$/,
                loader: ExtractText.extract('css!sass?' + sassOptions),
                include: /style\.scss$/
            }
        ]
    },
    output: {
        path: 'build/',
        filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/index.html',
            hash: true, // enable cache busters
        }),
        new ExtractText('style.css', {
            allChunks: true
        })
    ]
};
