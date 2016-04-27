var uglifycss = require('gulp-uglifycss'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    qunit = require('gulp-qunit'),
    gulpif = require('gulp-if'),
    gulp = require('gulp'),
    del = require('del');

gulp.task('run-test', function () {
    return gulp.src('./tests/test.html')
        .pipe(qunit());
});

gulp.task('test', ['run-test'], function () {
    return gulp.src('./client/app/cities/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('clean', ['test'], function() {
    return del('./server/public/**');
});

gulp.task('move-index', ['clean'], function () {
    return gulp.src('./client/index.html')
        .pipe(useref())
        .pipe(gulpif(['*.js'], uglify()))
        .pipe(gulpif(['*.css'], uglifycss()))
        .pipe(gulp.dest('./server/public/'));
});

gulp.task('move-img', ['clean'], function () {
    return gulp.src('./client/img/*')
        .pipe(gulp.dest('./server/public/img'));
});

gulp.task('build', ['move-index', 'move-img']);
