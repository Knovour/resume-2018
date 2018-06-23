module.exports = {
	files: ['index.html', 'src/**/*.*'],
	watchEvents: ['change'],
	watchOptions: {
		ignoreInitial: true
	},
	port: 3000,
	middleware: false,
	serveStatic: [],
	notify: true,
	proxy: 'localhost:8081',
	snippetOptions: {
		rule: {
			match: /<\/footer>/i,
			fn(snippet, match) { return match + snippet }
		}
	}
}
