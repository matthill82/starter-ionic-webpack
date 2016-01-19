module.exports = function(grunt, options) {

    var flowSteps = (options.production) ? 'uglifyjs' : 'concat';

    return {

        html: ['app/index.html'],
        options: {
            dest: 'www',
            flow: {
                steps: {
                    js: [flowSteps]
                },
                post: {}
            }
        }


    }
};

