---
permalink: "/feed/"
eleventyExcludeFromCollections: true
---

<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>{{ site.title }}</title>
  <subtitle>{{ site.description }}</subtitle>
  <link href="{{ site.url }}feed/" rel="self"/>
  <link href="{{ site.url }}"/>
  <id>{{ site.url }}</id>
  <author>
    <name>{{ site.author.name }}</name>
    <email>{{ site.author.email }}</email>
  </author>
  {% for article in articles %}
  <entry>
    <title>{{ article.title }}</title>
    <link href="{{ article.url }}"/>
    <pubDate>{{ article.date_feed }}</pubDate>
    <id>{{ article.url }}</id>
    <content type="html">{{ article.description }}</content>
  </entry>
  {% endfor %}
</feed>
