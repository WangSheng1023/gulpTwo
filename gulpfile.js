var gulp = require('gulp');
var sass = require('gulp-sass');
var minCss = require('gulp-clean-css');
//编译scss压缩css
gulp.task('default', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('src/css'))
});
//监听scss
gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', gulp.series('default'));
});
//整合任务
gulp.task('dev', gulp.series('default', 'watch'));