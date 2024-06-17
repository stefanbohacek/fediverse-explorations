---
layout: layout-main.njk
title: Fediverse Explorations
eleventyNavigation:
  key: Fediverse Explorations
  order: 1
---

<div class="p-5 mb-5 bg-body-tertiary rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">{{ site.title }}</h1>
    <p class="col-md-8 fs-4">
      {{ site.description }}
    </p>
    <p class="col-md-8 fs-5">
      Collected by <a rel="me" href="https://stefanbohacek.online/@stefan">@stefan</a>.
    </p>
  </div>
</div>
<div class="mt-5 pt-3">
{% for article in articles %}
    <div class="d-flex">
      <div class="flex-shrink-0">
        <a href="{{ article.url }}">
          <img loading="lazy" width="120px" src="{{article.thumbnail}}" alt="{{article.thumbnail_description}}">
        </a>
      </div>
      <div class="flex-grow-1 ms-3">
        <p class="fw-bold">
          <a href="{{ article.url }}">
            {{article.title}}
          </a>
        </p>
        <p>
        {{article.description}}
        </p>
        <p class="text-muted">
        <small>📅  {{ article.date }} by {% for author in article.authors %}{% if forloop.last and forloop.index > 1 %} and {% endif %}{{author}}{% if not forloop.last %}, {% endif %}{% endfor %}</small>
        </p>
      </div>
    </div>
{% endfor %}
</div>
