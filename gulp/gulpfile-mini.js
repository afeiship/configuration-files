const gulp = require('gulp');

function streamTask() {
  return gulp.src('./src/*.js').pipe(gulp.dest('dist'));
}

exports.default = streamTask;
