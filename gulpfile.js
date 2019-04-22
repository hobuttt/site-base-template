const
  gulp = require('gulp'),
  less = require('gulp-less'),
  browserSync = require('browser-sync'),
  minifyCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify');

gulp.task('browserSync', function(){
  browserSync({
    server: {
      baseDir: '../template'
    },
  })
});

gulp.task('less', function () {
  return  gulp.src('src/less/*.less')
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(minifyCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('babel', () =>
  gulp.src('src/js/**.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(minify())
    .pipe(gulp.dest('js'))
);

gulp.task('watch', ['browserSync', 'less', 'babel'], function(){
  gulp.watch('src/less/*.less', ['less']);
  gulp.watch('**/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', ['babel'], browserSync.reload);
});
