module.exports = function (grunt, options) {
    return {
        css: {
            options: {
                assets_root: 'www/'
            },
            src: 'www/css/*.css'
        },
        html: {
            options: {
                assets_root: 'www/'
            },
            src: 'www/*.html'
        },
        about: {
            options: {
                assets_root: 'www/about-us/'
            },
            src: 'www/about-us/*.html'
        },
        terms: {
            options: {
                assets_root: 'www/terms/'
            },
            src: 'www/terms/*.html'
        },
        jobs: {
            options: {
                assets_root: 'www/jobs/'
            },
            src: 'www/jobs/*.html'
        },
        blog: {
            options: {
                assets_root: 'www/blog/'
            },
            src: 'www/blog/*.html'
        },
        calculator: {
            options: {
                assets_root: 'www/savings-calculator/'
            },
            src: 'www/savings-calculator//*.html'
        },
        getintouch: {
            options: {
                assets_root: 'www/get-in-touch/'
            },
            src: 'www/get-in-touch/*.html'
        },
        privacy: {
            options: {
                assets_root: 'www/privacy-policy/'
            },
            src: 'www/privacy-policy/*.html'
        }
    }
};


