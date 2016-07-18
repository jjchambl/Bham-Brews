var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('watch', ['browserSync', 'less'], function() {
    gulp.watch('app/css/*.less', ['less']);
    gulp.watch('app/js/**/*.js', browserSync);
    gulp.watch('app/index.html', browserSync);
    gulp.watch('app/views/**/*.html', browserSync);
});

gulp.task('hello', function() {
    console.log('Hey Jake remember when you had no idea how to do this?');
});

gulp.task('less', function() {
    return gulp.src('app/css/style.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});