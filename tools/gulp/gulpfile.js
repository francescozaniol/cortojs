var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

gulp.task('build', function() {

    gulp.src('../../corto.js')
        .pipe(gulp.dest('../..'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('../..'));

});
