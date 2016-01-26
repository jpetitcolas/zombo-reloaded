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
            { test: /\.scss$/, loader: 'style!css!sass?' + sassOptions, include: /style\.scss$/ }
        ]
    },
    output: {
        path: 'build/',
        filename: 'js/[name].js'
    }
};
