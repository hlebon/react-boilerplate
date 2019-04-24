const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js", // entry file
  output: {
    path: path.join(__dirname, "dist"), // need an absolute path, __dirname is a global in node
    filename: "app.bundle.js"
  }
};
