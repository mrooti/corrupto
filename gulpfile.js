var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('watch',['browserSync','sass','useref'], function() {
  //watch function
  gulp.watch('app/scss/**/*.scss',['sass']);
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
});

//sass compilate
gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
});

//Server
gulp.task('browserSync', function(){
  browserSync.init({
    server:{
      baseDir:'app'
    }
  })
});

//Optimización de código
gulp.task('useref', function(){
  return gulp.src('app/*.html')
  .pipe(useref())
  .pipe(gulp.dest(dist))
});

//uglify
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});