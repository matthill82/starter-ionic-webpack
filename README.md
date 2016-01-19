stater-webpack
=============
 
 Webpack Starter

## Quick Start

Clone the repository

```bash
$ git clone https://github.com/matthill82/starter-webpack.git
```

Install the dependencies

```bash
$ npm install
$ bower install
```

Watch Mode (this will run the webpack dev server)

```bash
$ gulp watch
```

Adding Cordova Plugins

```bash
$ cordova plugins add com.ionic.keyboard org.apache.cordova.console org.apache.cordova.device
```

Adding Cordova Platforms

```bash
$ cordova platform add ios
```

Build

```bash
$ gulp && cordova build
```

Running in the emulator

```bash
$ cordova emulate ios
```


Installing another dependency
```bash
$ bower install [package] --save

Then update webpackage.config

    vendor: [
        PATHS.bower + 'ionic/js/ionic.bundle',
        Paths.bower + 'new package that you've installed
    ],
    
```





