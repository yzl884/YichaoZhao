---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed publications and selected media coverage.
nav: true
nav_order: 2
---

<style>
  #journal-articles,
  #in-the-news,
  .publications [id] {
    scroll-margin-top: 8rem;
  }
</style>

[Journal Articles](#journal-articles) · [In the News](#in-the-news)

<h2 id="journal-articles">Journal Articles</h2>

\* Equal contribution.

{% include bib_search.liquid %}

<div class="publications">

<h3>First and Co-first Authored Papers</h3>

{% bibliography --file yichao-zhao --query @*[keywords=first] %}

<h3>Collaborative Publications</h3>

{% bibliography --file yichao-zhao --query @*[keywords=collaborative] %}

</div>

<h2 id="in-the-news">In the News</h2>

Selected coverage of our published work.

{% for coverage in site.data.media_coverage %}

<p class="media-coverage-item">
  <strong><a href="#{{ coverage.paper_key }}">{{ coverage.paper_title | escape }}</a></strong><br>
  <em>{{ coverage.journal | escape }}</em>, {{ coverage.year }}.<br>
  {% for outlet in coverage.outlets %}{% if outlet.url %}<a href="{{ outlet.url | escape }}">{{ outlet.name | escape }}</a>{% else %}{{ outlet.name | escape }}{% endif %}{% unless forloop.last %} · {% endunless %}{% endfor %}
</p>

{% endfor %}
