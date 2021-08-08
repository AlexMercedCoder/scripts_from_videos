const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const { production } = env ? env : { production: false };

  const main = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.m?\js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }],
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        },
        {
          test: /\.tsx?/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"],
        },
        {
          test: /\.(csv|tsv)$/,
          use: ["csv-loader"],
        },
        {
          test: /\.xml$/,
          use: ["xml-loader"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "jQuery - Lodash",
        template: "./src/index.html",
      }),
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };

  const dev = {
    output: {
      filename: "dev.js",
      path: path.resolve(__dirname, "dev"),
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dev",
      port: process.env.PORT,
    },
  };

  return production ? main : { ...main, ...dev };
};
