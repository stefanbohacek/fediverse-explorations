const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "article-list.json"));
let articles = JSON.parse(data);

articles
  .sort((a, b) => {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  })
  .forEach((article) => {
    article.date = new Date(article.date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

module.exports = () => {
  return articles;
};
