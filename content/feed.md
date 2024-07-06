---
permalink: "/feed/"
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
  <title>{{ site.title }}</title>
  <description>{{ site.description }}</description>
  <link>{{site.url}}</link>
  {% for article in articles %}
  <item>
    <title>{{ article.title }}</title>
    <link>{{ article.url }}</link>
    <description>{{ article.description }}</description>
    <guid>{{ article.url }}</guid>
    <pubDate>{{ article.date_feed }}</pubDate>
  </item>
  {% endfor %}
</channel>
</rss>
