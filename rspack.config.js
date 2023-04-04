/**
 * @type {import('@rspack/cli').Configuration}
 */

console.log("process.end.NODE_ENV", process.env.NODE_ENV);

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.jsx",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
    target: ["web"],

    // 启用presetEnv配置，在使用import { ActionSheet } from "antd-mobile"; 就会报错
    presetEnv: {
      mode: "entry",
      targets: ["Android >= 5.1"],
      coreJs: "3",
    },

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: 'jsx', // https://www.rspack.dev/zh/guide/react.html
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /.less$/,
        use: [
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        type: "css",
      },
    ],
  },
};
