const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js", // entry file
  output: {
    path: path.join(__dirname, "dist"), // need an absolute path, __dirname is a global in node
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      // babel loader rule
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new htmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};
