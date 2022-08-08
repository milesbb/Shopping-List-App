module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,js,css,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};