const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		authorization: ["@babel/polyfill", path.resolve(__dirname, "./src/js/authorization/")],
		registration: ["@babel/polyfill", path.resolve(__dirname, "./src/js/registration/")],
		gallery: ["@babel/polyfill", path.resolve(__dirname, "./src/js/gallery/")],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	devServer: { compress: true, port: 5050 },
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/html/index.html",
			filename: "index.html",
			chunks: ["authorization"],
		}),
		new HtmlWebpackPlugin({
			template: "src/html/registration.html",
			filename: "registration.html",
			chunks: ["registration"],
		}),
		new HtmlWebpackPlugin({
			template: "src/html/gallery.html",
			filename: "gallery.html",
			chunks: ["gallery"],
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: "src/assets/img/", to: "assets/img" }],
		}),
	],
	resolve: { extensions: [".js"] },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "eslint-loader",
				},
			},
			{
				test: /\.(ttf|woff|woff2|otf)/,
				use: ["file-loader"],
			},
			{
				test: /\.(png|gif|jpg|jpeg)/,
				use: ["file-loader"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		]
	}
}