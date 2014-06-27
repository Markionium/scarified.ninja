var gulp = require('gulp'),
    connect = require('gulp-connect'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-minify-css'),
    htmlmin = require('gulp-minify-html'),
    ngmin = require('gulp-ngmin'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    karma = require('gulp-karma'),
    es = require('event-stream'),
    runSequence = require('run-sequence');

var src_base = 'src/main/';
var test_base = 'src/test/';

gulp.task('server', function() {
  return connect.server({
    root: 'src/main/',
    port: 8000
  });
});

gulp.task('clean', function() {
  return gulp.src('target/').pipe(clean());
});

gulp.task('really-clean', function() {
  return gulp.src(['target/', 'node_modules/', 'src/main/vendor/']).pipe(clean());
});

gulp.task('usemin', function() {
  return gulp.src([src_base + 'index.html'])
      .pipe(usemin({
        css: [cssmin(), rev()],
        html: [htmlmin({empty: true})],
        js: [ngmin(), uglify(), rev()]
      }))
      .pipe(gulp.dest('target/'));
});

gulp.task('copy-files', function( cb ) {
  es.concat(
      gulp.src(src_base + 'manifest.webapp').pipe(gulp.dest('target/')),
      gulp.src(src_base + 'components/**/*.html').pipe(gulp.dest('target/components')),
      gulp.src(src_base + 'vendor/font-awesome/fonts/**').pipe(gulp.dest('target/fonts'))
  ).on('done', cb);
});

gulp.task('test', function() {
  var files = [
        src_base + 'vendor/jquery/jquery.js',
        src_base + 'vendor/angular/angular.js',
        src_base + 'vendor/angular-*/angular-*.js',
        src_base + 'app.js',
        src_base + 'components/**/*.js',
        test_base + 'specs/**/*_spec.js',
        src_base + 'components/**/*.html'
  ];

  return gulp.src(files)
      .pipe(karma({
        configFile: 'src/config/karma.conf.js',
        action: 'run'
      }))
      .on('error', function( err ) {
        throw err;
      });
});

gulp.task('default', function() {
  runSequence('clean', 'test', ['copy-files', 'usemin']);
});
