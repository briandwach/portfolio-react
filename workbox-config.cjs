module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.png'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};