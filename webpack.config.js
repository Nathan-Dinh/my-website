const path = require("path");

module.exports = {
  entry: [
    "./src/shared/time-item.js",
    "./src/shared/side-nav.js",
    "./src/shared/footer.js",
  ],
  output: {
    path: path.resolve("./src", "dist"),
    filename: "main.js",
  },
  mode: "development",
};
