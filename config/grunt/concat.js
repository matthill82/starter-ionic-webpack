module.exports = function() {
    return {
        options: {
            sourceMap: false
        },
        snapshot: {
            src: ['public/vendor/bower_components/angular/angular.js',
                'public/vendor/bower_components/angular-animate/angular-animate.js',
                'public/vendor/bower_components/angular-sanitize/angular-sanitize.js',
                'public/vendor/bower_components/angular-cookies/angular-cookies.js',
                'public/vendor/bower_components/angular-inview/angular-inview.js',
                'public/vendor/bower_components/angular-ui-router/release/angular-ui-router.js',
                'public/vendor/bower_components/angulartics/src/angulartics.js',
                'public/vendor/bower_components/angulartics/src/angulartics-gtm.js',
                'public/vendor/odometer.min.js',
                'public/vendor/bower_components/angulartics/src/angulartics-kissmetrics.js',
                'app/app.module.js',
                'app/**/*.module.js',
                'app/!(*spec|*mock|*route).js',
                'app/**/*.factory.js',
                'app/**/!(*spec|*mock|*route).js'
            ],
            dest: 'www/js/app.js'
        }
    };
};
