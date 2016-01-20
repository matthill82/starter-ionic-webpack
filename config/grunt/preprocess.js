module.exports = function (grunt, options) {
    return {
        options: {
            inline: true,
            context: {
                DEBUG: !(options.production),
                PROD: !!(options.production)
            }
        },
        html: {
            src: [
                'www/index.html',
                'www/partials/*.html',
                'www/views/*.html'
            ]
        }
    }
};
