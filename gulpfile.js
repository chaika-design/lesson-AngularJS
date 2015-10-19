var gulp        = require('gulp'),
    webserver   = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./test')
    .pipe(webserver({
      livereload: true,
      port: 3000
    }));
});

gulp.task('default', ['webserver']);
