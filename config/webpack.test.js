// const path = require("path");
const { stylelint } = require("./base");

module.exports = {
  //不能共用
  mode: "development",
  //   output: {
  //     // eslint-disable-next-line
  //     // path: path.resolve(__dirname, "build"),
  //     // // 临时
  //     // publicPath: "build/",

  //     filename: "bundle.js",
  //   },

  plugins: [...stylelint],
};
