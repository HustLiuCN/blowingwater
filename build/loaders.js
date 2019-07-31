const path = require('path')
const config = require('./config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const fontsPath = config.buildType === 'test' ? 'https://arthur-test.corp.kuaishou.com' : 'https://arthur.corp.kuaishou.com'

const rules = [
	// vue
	{
		test: /\.vue$/,
		loader: 'vue-loader',
	}, {
		test: /\.scss$/,
		use: [
			config.isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
			'css-loader',
			'sass-loader',
			{
				loader: 'sass-resources-loader',
				options: {
					resources: './src/style/global.scss',
				},
			}
		],
	}, {
		test: /\.css$/,
		use: [
			config.isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
			'css-loader'
		],
	}, {
		test: /\.js$/,
		exclude: /node_modules/,
		use: [
			'babel-loader',
			// 'eslint-loader',
		],
	}, {
		test: /\.(png|jpg|gif)$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 8192,
				},
			}
		]
	}, {
		test: /\.(ttf|eot|woff|woff2)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					outputPath: '/fonts',
					// publicPath: '/static/fonts',
					publicPath: config.isDev ? '/static/fonts' : `${fontsPath}/static/fonts`,
					useRelativePath: true,
				},
			}
		]
	}
]

if (config.isDev) {
	rules.unshift({
		enforce: 'pre',
		test: /\.(js|vue)$/,
		exclude: /node_modules/,
		loader: 'eslint-loader',
		options: {
			// formatter: require('eslint-friendly-formatter'),
		},
	})
}

module.exports = rules
