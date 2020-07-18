process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    //js执行入口文件
    entry: "./src/main_server.js",
    //为了不把nodejs内置模块打包进输出文件中，例如： fs net模块等；
    target: "node",
    //为了不把node_modeuls目录下的第三方模块打包进输出文件中
    externals: [nodeExternals()],
    output: {
        //为了以commonjs2规范导出渲染函数，以给采用nodejs编写的HTTP服务调用
        libraryTarget: "commonjs2",
        //把最终可在nodejs运行的代码输出到一个bundle_server.js文件中
        filename: "bundle_server.js",
        //输出文件都到dist目录下
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css?$/,
                use: [
                    {
                        loader: "isomorphic-style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[local]--[hash:base64:5]"
                            }
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map'
}