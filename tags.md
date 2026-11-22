---
layout: page
title: Tags
lead: Select a project or AI model to view its dedicated release history.
permalink: /tags/
---
{%- assign sorted_tags = site.tags | sort -%}
{%- assign project_tags = "" | split: "" -%}
{%- assign model_tags = "" | split: "" -%}
{%- for tag in sorted_tags -%}
  {%- if tag[1].first.tags.first == tag[0] -%}
    {%- assign project_tags = project_tags | push: tag -%}
  {%- else -%}
    {%- assign model_tags = model_tags | push: tag -%}
  {%- endif -%}
{%- endfor -%}

<div class="uvy-tabs" role="tablist" aria-label="Filter tags by kind" data-requires-js hidden>
  <button id="tag-tab-all" role="tab" type="button" aria-selected="true" data-tag-filter="all">All ({{ sorted_tags.size }})</button>
  <button id="tag-tab-project" role="tab" type="button" aria-selected="false" data-tag-filter="project">Projects ({{ project_tags.size }})</button>
  <button id="tag-tab-model" role="tab" type="button" aria-selected="false" data-tag-filter="model">Models ({{ model_tags.size }})</button>
</div>

<div class="uvy-toolbar blog-tags-toolbar" data-requires-js hidden>
  <div class="uvy-field">
    <label for="tag-filter-input">Filter tags</label>
    <input id="tag-filter-input" class="uvy-input--mono" type="search" placeholder="Project or model name…" autocomplete="off" />
  </div>
  <button id="tag-filter-clear" class="uvy-button" type="button" hidden>Clear filter</button>
  <span id="tag-filter-count" class="uvy-count" role="status" aria-live="polite">{{ sorted_tags.size }} tags shown</span>
</div>

<div id="tag-filter-empty" class="uvy-empty" hidden>
  <strong>No matching tags</strong>
  <p>Clear your filter or switch back to All to browse every project and model.</p>
</div>

<section class="blog-tag-group" id="projects" data-tag-group="project" aria-labelledby="projects-heading">
  <div class="blog-tag-group__header">
    <h2 id="projects-heading">Projects</h2>
    <span class="uvy-count">{{ project_tags.size }} projects</span>
  </div>
  <ul class="blog-tag-directory">
    {%- for tag in project_tags -%}
      {%- assign t_name = tag[0] -%}
      {%- assign t_posts = tag[1] | sort: 'date' | reverse -%}
      {%- assign latest_post = t_posts.first -%}
      <li data-tag-row data-tag-kind="project" data-tag-name="{{ t_name | downcase | escape }}">
        <a class="blog-tag-directory__link" href="{{ t_name | slugify | prepend: '/tags/' | append: '/' | relative_url }}">
          <span class="blog-tag-directory__name">{{ t_name | escape }}</span>
          <span class="blog-tag-directory__meta">
            <time datetime="{{ latest_post.date | date: '%Y-%m-%d' }}">{{ latest_post.date | date: "%Y-%m-%d" }}</time>
            <span class="blog-dot" aria-hidden="true">·</span>
            <span class="num">{{ t_posts.size }} {% if t_posts.size == 1 %}post{% else %}posts{% endif %}</span>
          </span>
        </a>
      </li>
    {%- endfor -%}
  </ul>
</section>

<section class="blog-tag-group" id="models" data-tag-group="model" aria-labelledby="models-heading">
  <div class="blog-tag-group__header">
    <h2 id="models-heading">Models</h2>
    <span class="uvy-count">{{ model_tags.size }} models</span>
  </div>
  <ul class="blog-tag-directory blog-tag-directory--single">
    {%- for tag in model_tags -%}
      {%- assign t_name = tag[0] -%}
      {%- assign t_posts = tag[1] | sort: 'date' | reverse -%}
      {%- assign latest_post = t_posts.first -%}
      <li data-tag-row data-tag-kind="model" data-tag-name="{{ t_name | downcase | escape }}">
        <a class="blog-tag-directory__link" href="{{ t_name | slugify | prepend: '/tags/' | append: '/' | relative_url }}">
          <span class="blog-tag-directory__name">{{ t_name | escape }}</span>
          <span class="blog-tag-directory__meta">
            <time datetime="{{ latest_post.date | date: '%Y-%m-%d' }}">{{ latest_post.date | date: "%Y-%m-%d" }}</time>
            <span class="blog-dot" aria-hidden="true">·</span>
            <span class="num">{{ t_posts.size }} {% if t_posts.size == 1 %}post{% else %}posts{% endif %}</span>
          </span>
        </a>
      </li>
    {%- endfor -%}
  </ul>
</section>
