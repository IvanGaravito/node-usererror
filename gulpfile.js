var fs = require('fs')
var gulp = require('gulp')
var jsdoc2md = require('jsdoc-to-markdown')
var mocha = require('gulp-mocha')
var standard = require('gulp-standard')

gulp.task('docs', function () {
  jsdoc2md({
    src: 'index.js',
    template: fs.readFileSync('./docs/README.hbs', 'utf8')
  })
  .on('error', console.error)
  .pipe(fs.createWriteStream('README.md'))
})

gulp.task('standard', function () {
  return gulp.src('./index.js')
    .pipe(standard())
})

gulp.task('test', ['standard'], function () {
  gulp.src('test/**/*.js')
    .pipe(mocha())
})
