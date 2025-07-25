const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ['./src/template.html'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png)$/i,
                type: "asset/resource",
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: './src/template.html'})]
}