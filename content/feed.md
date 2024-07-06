---
permalink: "/feed/"
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>{{ site.title }}</title>
  <description>{{ site.description }}</description>
  <link>{{site.url}}</link>
  <atom:link href="{{site.url}}feed/" rel="self" type="application/rss+xml" />
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
