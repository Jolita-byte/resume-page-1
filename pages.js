const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/Jolita-byte/jolita-byte.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "Jolita-page-1",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
