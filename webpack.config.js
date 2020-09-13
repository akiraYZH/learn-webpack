// const path = require("path");

const { ESLINT_ENABLE } = require("./config/base");

// plugins

module.exports = function (env = {}, argv) {
  let config = null;
  if (env.dev) {
    // 开发模式
    config = require("./config/webpack.dev");
  } else if (env.prod) {
    // 生产模式
    config = require("./config/webpack.prod");
  } else {
    // 测试
    config = require("./config/webpack.test");
  }

  return {
    // 能公用
    entry: "./src/index.js",
    module: {
      rules: [
        // js or jsx
        {
          test: /\.jsx?/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        },
        ...(ESLINT_ENABLE
          ? [
              {
                loader: "eslint-loader",
                options: {
                  //report
                },
              },
            ]
          : []),
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [require("autoprefixer")],
              },
            },
          ],
        },
        {
          // css背景图
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: "url-loader",
            options: {
              outputPath: "imgs/",
              // 10kb
              limit: 10 * 1024,
            },
          },
        },
        {
          // font
          test: /\.(eot|svg|ttf|woff|woff2)$/i,
          use: {
            loader: "url-loader",
            options: {
              outputPath: "fonts/",
              // 10kb
              limit: 10 * 1024,
            },
          },
        },
        {
          // font
          test: /\.less$/i,
          use: ["style-loader", "css-loader", "less-loader"],
        },
      ],
    },
    ...config,
  };
};
