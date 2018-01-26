var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('dev/scss/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('dev/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
    });

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('dev/scss/**/*.scss', ['sass']); 
    gulp.watch('dev/*.html', browserSync.reload);
    gulp.watch('dev/js/**/*.js', browserSync.reload);
    });

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        baseDir: 'dev'
        },
    })
});