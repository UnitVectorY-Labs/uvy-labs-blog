---
layout: page
title: Tags
permalink: /tags/
---

{% assign sorted_tags = site.tags | sort %}

<div class="tag-cloud">
{% for tag in sorted_tags %}
  <a href="#{{ tag[0] | slugify }}" class="tag-badge">{{ tag[0] }} ({{ tag[1].size }})</a>
{% endfor %}
</div>

---

{% for tag in sorted_tags %}
<h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
<ul>
  {% assign posts = tag[1] | sort: 'date' | reverse %}
  {% for post in posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-meta">— {{ post.date | date: "%B %-d, %Y" }}</span>
  </li>
  {% endfor %}
</ul>
{% endfor %}

<style>
.tag-cloud {
  margin-bottom: 1.5rem;
  line-height: 2.2;
}
.tag-badge {
  display: inline-block;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 3px;
  padding: 2px 8px;
  margin: 2px;
  font-size: 0.9em;
  text-decoration: none;
  color: #d1d5db;
}
.tag-badge:hover {
  background: #273244;
}
</style>
