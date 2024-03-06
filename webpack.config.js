const path = require("path");

module.exports = {
  entry: ["./src/shared/simple-greeting.js", "./src/shared/side-nav.js"],
  output: {
    path: path.resolve("./src", "dist"),
    filename: "main.js",
  },
  mode: "development",
};
