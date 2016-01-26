module.exports = {
    entry: {
        zombo: [
            './js/copyright.js',
            './js/newsletterLink.js',
            './style.css'
        ]
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', include: __dirname + '/js' },
            { test: /\.css$/, loader: 'style!css', include: /style\.css$/ }
        ]
    },
    output: {
        path: 'build/',
        filename: 'js/[name].js'
    }
};
