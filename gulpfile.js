const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
 
gulp.task('style', function() {
    return gulp.src("src/*.css")
    .pipe(gulp.dest("dist/css"))
})

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', () => {
    return gulp.src('src/js/*.js')
      .pipe(gulp.dest('dist/js'));
  });

gulp.task('logo', () => {
return gulp.src('src/logo/*')
    .pipe(gulp.dest('dist/logo'));
});

gulp.task('images', () => {
return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});


gulp.task('default', gulp.parallel("style", "html", "scripts", "logo", "images"));