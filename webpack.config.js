const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Product List',
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		clean: true,
		publicPath: '/',
	},
	optimization: {
		runtimeChunk: 'single',
	},
}