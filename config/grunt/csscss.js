module.exports = function (grunt, options) {
    return {
        options: {
            minMatch: 5,
            verbose: true
        },
        dist: {
            src: ['www/css/app.css']
        }
    }
};
