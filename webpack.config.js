const path = require("path");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
module.exports = {
    mode:isDev?"development":"production",
    entry: "./src/index.tsx",
    output: {
        filename: `./js/${filename("js")}`,
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "[name][ext]"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devtool: isDev ? "source-map" : "",
    devServer: {
        static: {
            directory: path.join(__dirname, "./")
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
            },
        open:true,
        port:3000,
        hot:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin(),
        !isDev && new BundleAnalyzerPlugin(),
        isDev && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.s[ca]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/,
                type: "asset/resource"
            },
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                        },
                    },
                ]
            }
        ]
    }
}