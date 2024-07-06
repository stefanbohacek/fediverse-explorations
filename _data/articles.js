function addLeadingZero(num) {
  num = num.toString();
  while (num.length < 2) num = "0" + num;
  return num;
}

function buildRFC822Date(dateString) {
  const dayStrings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthStrings = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const timeStamp = Date.parse(dateString);
  const date = new Date(timeStamp);

  const day = dayStrings[date.getDay()];
  const dayNumber = addLeadingZero(date.getDate());
  const month = monthStrings[date.getMonth()];
  const year = date.getFullYear();
  const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:00`;
  const timezone = date.getTimezoneOffset() === 0 ? "GMT" : "BST";

  return `${day}, ${dayNumber} ${month} ${year} ${time} ${timezone}`;
}

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

    article.date_feed = buildRFC822Date(article.date);
    const { hostname } = new URL(article.url);
    article.domain = hostname;
  });

module.exports = () => {
  return articles;
};
