const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');


gulp.task('sass-compile', function () {
    return gulp.src('./style/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./style/css/'))
});


gulp.task('watch', function () {
    gulp.watch('./style/scss/**/*.scss', gulp.series('sass-compile'))
})