module.exports = function (grunt, options) {
    return {
        options: {
            sourceComments:!(options.production),
            includePaths: ['app/components', 'public/vendor/bower_components'],
            outputStyle: (options.production ? 'compressed' : 'expanded')
        },
        main: {
            files: {
                'www/css/app.css': 'public/scss/app.scss',
                'www/css/print.css': 'public/scss/print.scss'
            }
        }
    }
};
