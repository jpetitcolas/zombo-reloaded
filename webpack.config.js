module.exports = {
    entry: {
        zombo: [
            './js/copyright.js',
            './js/newsletterLink.js'
        ]
    },
    output: {
        path: 'build/',
        filename: 'js/[name].js'
    }
};
