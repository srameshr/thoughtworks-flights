const gulp = require("gulp");
const jscs = require('gulp-jscs');

const webserver = require('gulp-webserver');

//Reused
const concat = require('gulp-concat');

// CSS
const sass = require("gulp-sass");
const minifyCSS = require('gulp-minify-css');
const autoPrefix = require('gulp-autoprefixer'); // Browser support

const config = require('./gulp.config')();

gulp.task("serve", () => {
  gulp.src('./')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
  }));
});

gulp.task("wiredep", () => {
  console.log("Pending! Not part of the requirement");
});

gulp.task("scripts", () => {
  return gulp.src(config.allJS)
    .pipe(jscs({fix: true}))
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    .pipe(gulp.dest('./'));
});

gulp.task("css", () => {
  return gulp.src(config.allScss)
    .pipe(concat(config.cssOP))
    .pipe(sass())
    .pipe(autoPrefix({
      browsers: config.browserPrefix,
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.cssDest))
})

gulp.task('watch', function() {
  // Undo scripts, fonts, img. Breaking.
  gulp.watch(config.allScss, ['css']);
});

