const path = require("path");
const { stylelint, htmlPlugin } = require("./base");

module.exports = {
  //不能共用
  mode: "production",
  output: {
    // eslint-disable-next-line
    path: path.resolve(__dirname, "../build"),
    // // 临时
    // publicPath: "build/",

    filename: "bundle.min.js",
  },
  plugins: [...stylelint, htmlPlugin],
};
