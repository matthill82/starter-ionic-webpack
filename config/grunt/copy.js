module.exports = {
    usemin: {
        src: 'app/index.html', dest: 'www/index.html'
    },
    root_assets: {
        files: [
            {expand: true, cwd: 'public/', src: ['*.*'], dest: 'www'}
        ]
    },
    calculator: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['calculator/**'],
                dest: 'www/'
            }
        ]
    },
    images: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['images/**'],
                dest: 'www/'
            }
        ]
    },
    kayako: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['kayako/**'],
                dest: 'www/'
            }
        ]
    },
    appletouch: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['apple-touch/**'],
                dest: 'www/'
            }
        ]
    },
    svg: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['svg/**'],
                dest: 'www/'
            }
        ]
    },
    fonts: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['fonts/**', 'fonts/.htaccess'],
                dest: 'www/'
            }
        ]
    },
    kissmetrics: {
        files: [
            {
                expand: true,
                cwd: 'public/vendor',
                src: ['kissmetrics/**'],
                dest: 'www/'
            }
        ]
    },
    partials: {
        files: [
            {
                expand: true,
                cwd: 'app/components/',
                src: ['**/**.html'],
                dest: 'www/partials/',
                flatten: true
            },
            {
                expand: true,
                cwd: 'app/states/',
                src: ['**/**.html'],
                dest: 'www/views/',
                flatten: true
            }
        ]
    }
};
