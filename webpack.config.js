const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./build/config')
const devServer = require('./build/dev-server')
const rules = require('./build/loaders')

const webpackConfig = {
	mode: config.env,
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: 'js/[name].[hash:8].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/static/',
	},
	// TODO
	module: {
		rules,
	},
	optimization: {
		splitChunks: {
			chunks: 'initial',
			minSize: 10000,
			minChunks: 3,
			name: 'common',
			cacheGroups: {
				lib: {
					test: /[\\/]node_modules[\\/]/,
					name: 'lib',
					priority: 10,
					enforce: true,
				},
			},
		},
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'views/app.html',
			template: path.resolve(__dirname, './src/index.html'),
			chunks: ['lib', 'common', 'app'],
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: config.isDev ? 'css/[name].css' : 'css/[name].[hash:8].css',
			chunkFilename: config.isDev ? 'css/[id].css' : 'css/[id].[hash:8].css',
		}),
	],
	resolve: {
		extensions: ['.js', '.vue', '.scss', '.css', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@build': path.resolve(__dirname, './build'),
			'@api': path.resolve(__dirname, './src/api'),
			'@style': path.resolve(__dirname, './src/style'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@views': path.resolve(__dirname, './src/views'),
			'@components': path.resolve(__dirname, './src/components'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@imgs': path.resolve(__dirname, './src/imgs'),
			'@mock': path.resolve(__dirname, './mock'),
			'@enum': path.resolve(__dirname, './src/enum'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
	devServer,
}

module.exports = webpackConfig

