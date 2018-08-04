'use strict';

const gulp  = require('gulp');
const ts    = require('gulp-typescript');
var exec    = require('child_process').exec;
var del     = require('del');
var nodemon = require("gulp-nodemon");


// npx ts-node dist/server/development.ts
gulp.task('devServe', function () {
    nodemon({
        script: 'dist/server/development.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
});

// npx ts-node dist/server/production.ts
gulp.task('serve', function () {
    nodemon({
        script: 'dist/server/production.js',
        ext: 'js',
        env: { 'NODE_ENV': 'production' }
    });
});

gulp.task('build_angular_project', function (cb) {
    exec('ng build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// The ts @types has bugs, so is mush managed in .js type file
gulp.task('email', function() {
    return gulp.src('src/server/email.js')
        .pipe(gulp.dest('dist/server'));
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('buildServe', function() {
    return gulp.src('src/serve/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
        }))
        .pipe(gulp.dest('dist/server'));
});

gulp.task('build', ['build_angular_project'], function() {
    return gulp.start('buildServe');
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
