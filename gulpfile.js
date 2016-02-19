const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      imagemin = require('gulp-imagemin');
;

gulp.task('default', ['watch']);

gulp.task('build-css', function(){
  return gulp.src('app/src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/dist'));
});

gulp.task('optimize-imgs', function(){
  return gulp.src('app/src/img/*')
        .pipe(imagemin({ optimizationLevel: 5, progressive: true }))
        .pipe(gulp.dest('app/dist/images'));
});

gulp.task('watch', function(){
  gulp.watch('app/src/scss/**/*.scss', ['build-css']);
});

gulp.task('publish', function(){
  gulp.src('./app/dist/*')
  .pipe(gulp.dest('./'));
})
