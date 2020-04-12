const es2015 = require("babel-preset-es2015");
const presetReact = require("babel-preset-react");
require("babel-register")({
  presets: [es2015, presetReact],
});
//Import our routes
const router = require("./routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
    new Sitemap(router())
      .build("https://pedroh1510.netlify.com/")
      //Save it wherever you want
      .save("./public/sitemap.xml")
  );
}

generateSitemap();
// const presetReact = require("babel-preset-react");
// const es2015 = require("babel-preset-es2015");
// require("babel-register")({
//   presets: [es2015, presetReact],
// });

// const router = require("./routes").default;
// const Sitemap = require("react-router-sitemap").default;

// new Sitemap(router)
//   .build("https://pedroh1510.netlify.com/")
//   .save("./public/sitemap.xml");