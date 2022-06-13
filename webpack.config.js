const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

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
		new Dotenv(),
	],
};
