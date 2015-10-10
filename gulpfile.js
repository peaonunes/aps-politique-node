var gulp   = require('gulp');
var tsc    = require('gulp-tsc');
var runseq = require('run-sequence');
var tslint = require('gulp-tslint');

var paths = {
	all: {
		src: ['src/**/*']
	},
  tscripts : {
		src : ['src/**/*.ts'],
    dest : 'build'
	},
	jscripts : {
		src : ['src/**/*.js'],
    dest : 'build'
	}
};

gulp.task('default', function(callback) {
	runseq('buildall', 'watch', callback);
});

gulp.task('watch', function() {
	gulp.watch(paths.all.src, ['buildall']);
});

gulp.task('buildall', function(callback) {
	runseq('build', 'copyjs', callback);
});

gulp.task('build', function() {
	return gulp.src(paths.tscripts.src)
		.pipe(tsc({
			module: "commonjs"
		}))
		.pipe(gulp.dest(paths.tscripts.dest));
});

gulp.task('copyjs', function() {
	return gulp.src(paths.jscripts.src)
		.pipe(gulp.dest(paths.jscripts.dest));
});
