const StyleLintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const STYLELINT_ENABLE = false;
const ESLINT_ENABLE = false;

module.exports = {
  ESLINT_ENABLE,
  stylelint: STYLELINT_ENABLE
    ? [
        new StyleLintPlugin({
          files: [
            "**/*.css",
            "**/*.less",
            "**/*.scss",
            "**/*.vue",
            "**/*.html",
          ],
        }),
      ]
    : [],
  // 生成html
  htmlPlugin: new HtmlWebpackPlugin({
    // eslint-disable-next-line
    template: path.resolve(__dirname, "../index.html"),
  }),
};
