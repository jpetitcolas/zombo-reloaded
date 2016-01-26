module.exports = {
    entry: {
        zombo: [
            './js/copyright.js',
            './js/newsletterLink.js'
        ]
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', include: __dirname + '/js' }
        ]
    },
    output: {
        path: 'build/',
        filename: 'js/[name].js'
    }
};
