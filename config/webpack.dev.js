const path = require("path");
const { stylelint, htmlPlugin } = require("./base");

module.exports = {
  //不能共用
  mode: "development",
  output: {
    // eslint-disable-next-line
    // path: path.resolve(__dirname, "build"),
    // // 临时
    // publicPath: "build/",

    filename: "bundle.js",
  },
  // 编译后还原源码,可以在浏览器看到
  devtool: "source-map",
  devServer: {
    // eslint-disable-next-line
    contentBase: path.resolve(__dirname, "./"),
    compress: true,
    port: 3000,
    open: true,
  },
  plugins: [...stylelint, htmlPlugin],
};
