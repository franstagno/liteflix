const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = {
	entry: {
		home: path.join(__dirname, "src/views/Home.js"),
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.(png|jp(e*)g|gif)$/,
				use: ["file-loader"],
			},
			{
				test: /\.svg$/,
				loader: "svg-inline-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunks: ["home"],
			template: path.join(__dirname, "src/html/index.html"),
			filename: "index.html",
		}),
		new CopyPlugin({
			patterns: [{ from: path.resolve(__dirname, "public") }],
		}),
		new webpack.DefinePlugin(envKeys),
	],
};
