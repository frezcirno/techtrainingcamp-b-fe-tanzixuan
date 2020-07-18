process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: 'production',
    //js执行入口文件
    entry: "./src/index.js",
    //为了不把nodejs内置模块打包进输出文件中，例如： fs net模块等；
    target: "node",
    //为了不把node_modeuls目录下的第三方模块打包进输出文件中
    externals: [nodeExternals()],
    output: { 
        filename: "js/[name].[chunkhash:8].js",
        path: path.resolve(__dirname, './dist/static'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    devtool: 'source-map'
}