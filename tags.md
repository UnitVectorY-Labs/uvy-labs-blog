---
layout: page
title: Tags
lead: Browse release announcements by UnitVectorY-Labs repository or by the AI model used to generate the article.
permalink: /tags/
---
{%- assign sorted_tags = site.tags | sort -%}
{%- assign project_count = 0 -%}
{%- assign model_count = 0 -%}
{%- for tag in sorted_tags -%}
  {%- if tag[1].first.tags.first == tag[0] -%}
    {%- assign project_count = project_count | plus: 1 -%}
  {%- else -%}
    {%- assign model_count = model_count | plus: 1 -%}
  {%- endif -%}
{%- endfor -%}

<div class="uvy-tabs" role="tablist" aria-label="Filter tags by kind" data-requires-js hidden>
  <button id="tag-tab-all" role="tab" type="button" aria-selected="true" data-tag-filter="all">All tags ({{ sorted_tags.size }})</button>
  <button id="tag-tab-project" role="tab" type="button" aria-selected="false" data-tag-filter="project">Projects ({{ project_count }})</button>
  <button id="tag-tab-model" role="tab" type="button" aria-selected="false" data-tag-filter="model">Models ({{ model_count }})</button>
</div>

<div class="uvy-toolbar blog-tags-toolbar" data-requires-js hidden>
  <div class="uvy-field">
    <label for="tag-filter-input">Filter tags</label>
    <input id="tag-filter-input" class="uvy-input--mono" type="search" placeholder="Repository or model name…" autocomplete="off" />
  </div>
  <button id="tag-filter-clear" class="uvy-button" type="button" hidden>Clear filter</button>
  <span id="tag-filter-count" class="uvy-count" role="status" aria-live="polite">{{ sorted_tags.size }} tags shown</span>
</div>

<nav class="blog-tag-cloud" aria-label="Tag directory">
  {%- for tag in sorted_tags -%}
    {%- assign t_name = tag[0] -%}
    {%- assign t_posts = tag[1] -%}
    {%- assign t_kind = "model" -%}
    {%- if t_posts.first.tags.first == t_name -%}
      {%- assign t_kind = "project" -%}
    {%- endif -%}
    <a href="#{{ t_name | slugify }}" class="uvy-badge blog-tag blog-tag--{{ t_kind }}" data-tag-chip data-tag-kind="{{ t_kind }}" data-tag-name="{{ t_name | downcase | escape }}">
      {{ t_name | escape }} <span class="blog-tag__count">{{ t_posts.size }}</span>
    </a>
  {%- endfor -%}
</nav>

<div id="tag-filter-empty" class="uvy-empty" hidden>
  <strong>No matching tags</strong>
  <p>Clear your filter or switch back to All tags to view every repository and model.</p>
</div>

<div class="blog-tag-sections">
  {%- for tag in sorted_tags -%}
    {%- assign t_name = tag[0] -%}
    {%- assign t_posts = tag[1] | sort: 'date' | reverse -%}
    {%- assign t_kind = "model" -%}
    {%- if tag[1].first.tags.first == t_name -%}
      {%- assign t_kind = "project" -%}
    {%- endif -%}
    <section class="blog-tag-section" id="{{ t_name | slugify }}" data-tag-section data-tag-kind="{{ t_kind }}" data-tag-name="{{ t_name | downcase | escape }}">
      <div class="blog-tag-section__header">
        <h2>{{ t_name | escape }}</h2>
        <div class="blog-tag-section__meta">
          <span class="uvy-badge">{{ t_kind }}</span>
          <span class="uvy-count">{{ t_posts.size }} {% if t_posts.size == 1 %}post{% else %}posts{% endif %}</span>
        </div>
      </div>
      <ol class="blog-archive-list">
        {%- for post in t_posts -%}
          <li>
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%Y-%m-%d" }}</time>
            <a class="blog-archive-list__title" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
          </li>
        {%- endfor -%}
      </ol>
    </section>
  {%- endfor -%}
</div>
