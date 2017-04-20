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
	vendorSrc: ['node_modules/marble/build/fonts/**']
};