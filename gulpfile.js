'use strict';

const connect = require('gulp-connect');
const electric = require('electric');
const ghPages = require('gulp-gh-pages');
const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const marble = require('marble');

electric.registerTasks({
	gulp: gulp,
	plugins: ['electric-marble-components']
});

// CSS -------------------------------------------------------------------------

gulp.task('css', () => {
	return gulp.src('src/styles/**/*.scss')
		.pipe(sass({
			includePaths: ['node_modules', marble.src]
		}))
		.pipe(gulp.dest('dist/styles'));
});

// Fonts -----------------------------------------------------------------------

gulp.task('fonts', () => {
	return gulp.src('node_modules/marble/build/fonts/**')
		.pipe(gulp.dest('dist/fonts'));
});

// Images ----------------------------------------------------------------------

gulp.task('images', () => {
	return gulp.src('src/images/**/*')
		.pipe(gulp.dest('dist/images'));
});

// AlloyEditor ---------------------------------------------------------------------

gulp.task('vendor:alloy-editor', () => {
	return gulp.src([
			path.join('node_modules/alloyeditor/dist/alloy-editor', 'alloy-editor-all-min.js'),
			path.join('node_modules/alloyeditor/dist/alloy-editor', 'config.js'),
			path.join('node_modules/alloyeditor/dist/alloy-editor', 'styles.js'),
			path.join('node_modules/alloyeditor/dist/alloy-editor/assets', 'alloy-editor-ocean-min.css')
		])
		.pipe(gulp.dest('dist/vendor/alloy-editor'));
});

gulp.task('vendor:alloy-editor:skin', () => {
	return gulp.src([
			path.join('node_modules/alloyeditor/dist/alloy-editor/skins/**')
		])
		.pipe(gulp.dest('dist/vendor/alloy-editor/skins'));
});

gulp.task('vendor:alloy-editor:lang', () => {
	return gulp.src([
			path.join('node_modules/alloyeditor/dist/alloy-editor/lang/**')
		])
		.pipe(gulp.dest('dist/vendor/alloy-editor/lang'));
});

gulp.task('vendor:alloy-editor:fonts', () => {
	return gulp.src([
			path.join('node_modules/alloyeditor/dist/alloy-editor/assets/fonts/*')
		])
		.pipe(gulp.dest('dist/vendor/alloy-editor/fonts'));
});

// Server ----------------------------------------------------------------------

gulp.task('server', () => {
	connect.server({
		root: 'dist',
		port: 8888
	});
});

// Deploy ----------------------------------------------------------------------

gulp.task('wedeploy', () => {
	return gulp.src('src/container.json')
		.pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['build'], () => {
	return gulp.src('dist/**/*')
		.pipe(ghPages({
			branch: 'wedeploy'
		}));
});

// Watch -----------------------------------------------------------------------

gulp.task('watch', () => {
	gulp.watch('src/**/*.+(md|soy|js|fm)', ['generate']);
	gulp.watch('src/styles/**/*.scss', ['css']);
});

// Build -----------------------------------------------------------------------

gulp.task('build', (callback) => {
	runSequence('generate', ['vendor:alloy-editor:skin', 'vendor:alloy-editor:lang', 'vendor:alloy-editor:fonts', 'vendor:alloy-editor', 'css', 'fonts', 'images', 'wedeploy'], callback);
});

gulp.task('default', (callback) => {
	runSequence('build', 'server', 'watch', callback);
});
