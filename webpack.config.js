var path = require("path");

module.exports = {

  entry: "./test/index.test.js",

  output: {

    filename: "test.bundle.js",
    path: path.resolve(__dirname, "dist")
  }

}