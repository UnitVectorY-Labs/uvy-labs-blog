---
layout: page
title: Archive
lead: Chronological index of every release announcement and engineering update published on the UnitVectorY-Labs Blog.
permalink: /archive/
---
{%- assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" -%}

<nav class="blog-year-jump" aria-label="Jump to year">
  <span class="uvy-label">Jump to year</span>
  <div class="blog-tags">
    {%- for yr in posts_by_year -%}
      <a class="uvy-badge blog-tag blog-tag--project" href="#year-{{ yr.name }}">
        {{ yr.name }} <span class="blog-tag__count">{{ yr.items.size }}</span>
      </a>
    {%- endfor -%}
  </div>
  <span class="uvy-count">{{ site.posts.size }} total posts</span>
</nav>

{%- for yr in posts_by_year -%}
  <section class="blog-archive-year" aria-labelledby="year-{{ yr.name }}">
    <div class="blog-archive-year__header">
      <h2 id="year-{{ yr.name }}">{{ yr.name }}</h2>
      <span class="uvy-count">{{ yr.items.size }} {% if yr.items.size == 1 %}post{% else %}posts{% endif %}</span>
    </div>
    {%- assign posts_by_month = yr.items | group_by_exp: "post", "post.date | date: '%B %Y'" -%}
    {%- for mo in posts_by_month -%}
      <h3 class="blog-archive-month">{{ mo.name }}</h3>
      <ol class="blog-archive-list">
        {%- for post in mo.items -%}
          {%- assign primary_tag = post.tags.first -%}
          <li>
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%b %d" }}</time>
            <a class="blog-archive-list__title" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
            {%- if primary_tag -%}
              <a class="uvy-badge blog-tag blog-tag--project" href="{{ '/tags/' | relative_url }}#{{ primary_tag | slugify }}">{{ primary_tag | escape }}</a>
            {%- endif -%}
          </li>
        {%- endfor -%}
      </ol>
    {%- endfor -%}
  </section>
{%- endfor -%}
