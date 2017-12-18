module.exports = function() {
	// Include gulp and plugins
	var gulp = require('gulp');
	var babel = require('gulp-babel');
	var sass = require('gulp-sass');
	
	// Include gulp and plugins
	var uglify = require('gulp-uglify');
	var sass_src = ['./assets/stylesheets/*.scss', './assets/stylesheets/subset/main-flowers-category.scss', './assets/stylesheets/subset/main-flowers-category-framework.scss', './assets/stylesheets/subset/main-flowers-promo.scss', './assets/stylesheets/subset/main-flowers-promo-framework.scss', './assets/stylesheets/subset/main-flowers-giftguide-framework.scss', './assets/stylesheets/subset/main-flowers-giftguide.scss'];
	var sass_dest = './css';

	// for dumping out errors in gulp for future debugging
	var errorOut = function(error) {
		console.error(error);
	}
	
	// Sass Compilation Task
	gulp.task('sass', function() {
		console.log('... Gulp . Running sass ..');
	    return gulp.src(sass_src)
	        .pipe(sass())
	        .pipe(gulp.dest(sass_dest));
	});

	// minifies JS
	gulp.task('minifyJS', function() {
		return gulp.src('./assets/javascript/main-*').on('error', errorOut)
			.pipe(babel({
	      presets: [['env', {modules: false}]]
	    })).on('error', errorOut)
			.pipe(uglify()).on('error', errorOut)
			.pipe(gulp.dest('./assets/javascript/min')).on('error', errorOut);
	});

	// Default Task
	gulp.task('default', ['sass','minifyJS']);

	return gulp;
};
