'use strict';

var marble = require('marble');
var path = require('path');

module.exports = {
	apiConfig: {
		layout: 'api',
		project: {
			refs: ['v1.3.1'],
			repo: 'alloy-editor',
			src: [
				'src/core/**/*.js',
				'src/plugins/**/*.js',
				'src/ui/react/src/**/*.js'
			],
			user: 'liferay'
		}
	},
	entryPoints: {
		electricAPI: path.join(__dirname, 'src/partials/ElectricAPI.js')
	},
	metalComponents: ['electric-marble-components'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	vendorSrc: [
		'node_modules/marble/build/fonts/**',
		{
			dest: 'dist/vendor/alloy-editor',
			src: [
				path.join('node_modules/alloyeditor/dist/alloy-editor', 'alloy-editor-all-min.js'),
				path.join('node_modules/alloyeditor/dist/alloy-editor', 'config.js'),
				path.join('node_modules/alloyeditor/dist/alloy-editor', 'styles.js'),
				path.join('node_modules/alloyeditor/dist/alloy-editor/assets', 'alloy-editor-ocean-min.css')
			]
		},
		{
			dest: 'dist/vendor/alloy-editor/skins',
			src: 'node_modules/alloyeditor/dist/alloy-editor/skins/**'
		},
		{
			dest: 'dist/vendor/alloy-editor/lang',
			src: 'node_modules/alloyeditor/dist/alloy-editor/lang/**'
		},
		{
			dest: 'dist/vendor/alloy-editor/fonts',
			src: 'node_modules/alloyeditor/dist/alloy-editor/assets/fonts/*'
		}
	]
};
