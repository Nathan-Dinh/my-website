const path = require("path");

module.exports = {
  entry: [
    "./src/shared/time-item.js",
    "./src/shared/side-nav.js",
    "./src/shared/footer.js",
    "./src/shared/time-line.js",
    "./src/shared/socials.js",
    "./src/shared/skill-sections/languages.js",
    "./src/shared/skill-sections/frontend.js",
    "./src/shared/skill-sections/backend.js",
    "./src/shared/skill-sections/database.js",
    "./src/shared/skill-sections/other.js",
    "./src/shared/mobile/mobile-side-nav.js",
  ],
  output: {
    path: path.resolve("./src", "dist"),
    filename: "main.js",
  },
  mode: "production",
};
