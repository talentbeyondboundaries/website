var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var nunjucksRender = require('gulp-nunjucks-render');
var htmlPrettify = require('gulp-html-prettify');
var removeEmptyLines = require('gulp-remove-empty-lines');

var paths = {
	server:             'dist',
	html_src:           'src/**/*.html',
	html_dest:          'dist/**/*.html',
	js_src:             'src/js/**/*.js',
	js_dest:            'dist/js',
	sass_src:           'src/sass/**/*.scss',
	css_dest:           'dist/css',
	nunjucks_views:     'src/views/**/*.+(html|nunjucks)',
	nunjucks_templates: 'src/templates'
};

gulp.task('minifyJS', function() {
	return gulp.src(paths.js_src)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(plumber.stop())
		.pipe(rename(function(path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(paths.js_dest))
		.pipe(browserSync.stream());
});

gulp.task('sass', function() {
	return gulp.src(paths.sass_src)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.css_dest));
});

gulp.task('autoprefix', function() {
	return gulp.src(paths.css_dest + '/styles.css')
		.pipe(autoprefix('last 2 versions', 'ie 9'))
		.pipe(gulp.dest(paths.css_dest));
});

gulp.task('uglifyCSS', function() {
	return gulp.src(paths.css_dest + '/styles.css')
		.pipe(uglifycss())
		.pipe(gulp.dest(paths.css_dest))
		.pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('compileCSS', gulp.series('sass', 'autoprefix', 'uglifyCSS', function(callback) {
		callback()
}));

gulp.task('nunjucks', function() {
	return gulp.src(paths.nunjucks_views)
		.pipe(plumber())
		.pipe(nunjucksRender({
			path: [paths.nunjucks_templates]
		}))
		.pipe(htmlPrettify({indent_char: ' ', indent_size: 4}))
		.pipe(removeEmptyLines())
		.pipe(gulp.dest(paths.server));
});

gulp.task('serve', gulp.series('compileCSS', 'minifyJS', 'nunjucks', function() {
	browserSync.init({
		server: paths.server
	});
	gulp.watch(paths.sass_src, gulp.series('compileCSS'));
	gulp.watch(paths.js_src, gulp.series('minifyJS'));
	gulp.watch(paths.html_src, gulp.series('nunjucks'));
	gulp.watch(paths.html_dest).on('change', browserSync.reload);
}));

gulp.task('build', gulp.series('compileCSS', 'minifyJS', 'nunjucks'));

gulp.task('default', gulp.series('serve'));
