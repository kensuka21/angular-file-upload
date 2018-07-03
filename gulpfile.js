var gulp = require('gulp');
var cssMin = require('gulp-css');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var image = require('gulp-image');

var config = {
    paths: {
        js: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jquery-ui-dist/jquery-ui.min.js',
            'node_modules/bootstrap3/dist/js/bootstrap.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/blueimp-load-image/js/load-image.all.min.js',
            'node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.js',
            'node_modules/blueimp-file-upload/js/jquery.iframe-transport.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-process.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-image.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js',
            'node_modules/blueimp-file-upload/js/jquery.fileupload-angular.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
            'public/**/*.js'
        ],
        css: [
            'node_modules/jquery-ui-dist/jquery-ui.min.css',
            'node_modules/blueimp-file-upload/css/jquery.fileupload-ui.css',
            'node_modules/blueimp-file-upload/css/jquery.fileupload.css',
            'node_modules/bootstrap3/dist/css/bootstrap.min.css',
            'node_modules/angular-toastr/dist/angular-toastr.min.css',
            'public/*/**.css'
        ],
        image: 'node_modules/blueimp-file-upload/img/loading.gif',
        html: 'public/**/*.html',
        dist: './dist'
    }
};

gulp.task('scripts', function () {
    gulp.src(config.paths.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function(){
    return gulp.src(config.paths.css)
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('image', function () {
    gulp.src(config.paths.image)
      .pipe(image())
      .pipe(gulp.dest(config.paths.dist + '/blueimp-file-upload/img'));
});

gulp.task('build', ['scripts', 'html', 'css', 'image']);
