const path = require('path')

module.exports = {
	contentBase: path.resolve(__dirname, './dist'),
	host: 'local.blowingwater.com',
	port: 2333,
	hot: true,
	historyApiFallback: {
		rewrites: [
			{ from: /./, to: '/static/views/app.html' },
		],
	},
	proxy: {
		'/api': 'http://127.0.0.1:2001',
	},
	compress: true,
}
