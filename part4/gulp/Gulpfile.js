// src
// dest
// watch
// task
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var karma = require('karma').server;

var testFiles = [
  'test/**/*.js'
];


gulp.task('default',['thenme'],function(){
	console.log('running default...');
})

gulp.task('thenme', ['mefirst'], function(){
	console.log('then me');
});


gulp.task('mefirst', function(){
	console.log('me first');
});


gulp.task('copy', function(){
	return gulp
			.src('./copyfromhere/*.txt')
			.pipe(gulp.dest('./tohere/'));
});

gulp.task('watch',function(){
	gulp.watch(['app/**/*.js','test/**/*.js'], ['lint','test']);	
});

gulp.task('test', function(done) {
    karma.start({
      configFile: __dirname + '/karma.conf.js',
	  singleRun : true
    }, function(){
		done();
	});
});

gulp.task('lint', function(){
	console.log('linting...');
	return gulp
			.src(['./app/**/*.js','./test/**/*.js'])
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
});

gulp.task('build',[], function(){
	console.log('running build..');
	return gulp
		.src('./app/**/*.js')
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dest/'));
});

