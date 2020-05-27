import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  mode: 'development',
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    filename: "main.js",
    path: resolve(__dirname, "build"),
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};

export default config;
