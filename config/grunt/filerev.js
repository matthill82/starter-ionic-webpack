module.exports = function (grunt, options) {
    return {
        options: {
            algorithm: 'md5',
            length: 12
        },
        dev: {
        },
        prodPre: {
            files: [{
                src: [
                    'www/images/**/*.{jpg,jpeg,gif,png,webp}'
                ]
            }]
        },
        prodPost: {
            files: [{
                src: [
                    'www/js/*.js',
                    'www/css/*.css'
                ]
            }]
        }
    }
};


