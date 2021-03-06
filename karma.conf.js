// Karma configuration
// Generated on Fri Feb 23 2018 19:37:33 GMT-0400 (AST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jquery-ui-dist/jquery-ui.min.js',
      './node_modules/bootstrap3/dist/js/bootstrap.min.js',
      './node_modules/angular/angular.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/blueimp-load-image/js/load-image.all.min.js',
      './node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.js',
      './node_modules/blueimp-file-upload/js/jquery.iframe-transport.js',
      './node_modules/blueimp-file-upload/js/jquery.fileupload.js',
      './node_modules/blueimp-file-upload/js/jquery.fileupload-process.js',
      './node_modules/blueimp-file-upload/js/jquery.fileupload-image.js',
      './node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js',
      './node_modules/blueimp-file-upload/js/jquery.fileupload-angular.js',
      './node_modules/angular-animate/angular-animate.min.js',
      './node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
      './public/**/*.js',
      './test/**/*.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
