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
      Studies, research papers, and informal polls that explore <a href="https://jointhefediverse.net/">the fediverse</a>.
    </p>
    <p class="col-md-8 fs-5">
      Collected by <a rel="me" href="https://stefanbohacek.online/@stefan">@stefan</a>.
    </p>
    <form class="fsb-prompt">
      <label>Share this page from your fediverse server</label>
      <div class="fsb-input-group mb-3">
        <span class="fsb-input-group-text">https://</span>
        <input required
          type="text"
          name="fediverse-domain"
          placeholder="mastodon.social"
          class="fsb-input fsb-domain"
          aria-label="Server domain">
        <button class="fsb-button"
          type="submit"><img src="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/icons/mastodon.svg"
            class="fsb-icon"></span>Share</button>
      </div>
      <p class="fsb-support-note fsb-d-none">This server does not support sharing. Please visit <a
          class="fsb-support-note-link"
          target="_blank"
          href=""></a>.</p>
    </form>
    <link rel="stylesheet" href="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/styles.min.css">
    <script src="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/script.min.js" defer class="fsb-script"></script>

  </div>
</div>
<div class="alert alert-secondary" role="alert">
  <em>All links listed below lead to external sites.</em>
</div>
<div class="mt-5 pt-3">
  {% for article in articles %}<div class="d-flex align-items-start mb-3">
    <div class="flex-shrink-0">
      <a href="{{ article.url }}">
      {% if article.thumbnail %}<img class="border rounded" loading="lazy" width="120px" src="{{article.thumbnail}}" alt="{{article.thumbnail_description}}">{% else %}<img class="border rounded" loading="lazy" width="120px" height="77px" src="https://generative-placeholders.glitch.me/image?width=120&height=77" alt="An abstract art placeholder image">{% endif %}
      </a>
    </div>
    <div class="flex-grow-1 ms-3">
      <p class="fw-bold">
        <a href="{{ article.url }}">{{article.title}}</a> <small class="text-muted">{{article.domain}}</small>
      </p>
      <p>
      {{article.description}}
      </p>
      <p class="text-muted">
      <small>📅  {{ article.date }} by {% for author in article.authors %}{% if forloop.last and forloop.index > 1 %} and {% endif %}{{author}}{% if not forloop.last %}, {% endif %}{% endfor %}</small>
      </p>
    </div>
  </div>{% endfor %}
</div>
<div class="mt-5 pt-3">
  <h2>More links</h2>
  <ul class="mt-3">
    <li>
      <a href="https://www.pedrolr.es/research/infonomy2024/investigacionfediverso.html">Research about the Fediverse (Investigación sobre el Fediverso)</a> <small class="text-muted">pedrolr.es</small>
      
    </li>
  </ul>
</div>
