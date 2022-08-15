const path = require("path");

const HTMLwebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    mode: isDev? "development" : "production",
    entry: "./src/index.jsx",
    output: {
        filename: filename("js"),
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "[name][ext]"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        hot: true,
        port: 3000
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin(),
        isDev && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                        },
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset/resource"
            }
        ]
    }
}