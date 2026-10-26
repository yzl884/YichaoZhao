---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<style>
  #in-progress,
  #journal-articles,
  #in-the-news,
  .publications [id] {
    scroll-margin-top: 8rem;
  }

  .manuscripts-in-progress {
    list-style: none;
    padding-left: 0;
    margin: 1.3rem 0 2.5rem;
  }

  .manuscripts-in-progress li {
    margin-bottom: 1.25rem;
    line-height: 1.8;
  }
</style>

<span id="in-the-news"></span>

<p><sup>†</sup>: Contribute equally. <sup>*</sup>: Corresponding author.</p>

<h2 id="in-progress">In progress</h2>

<ul class="manuscripts-in-progress">
  {% for manuscript in site.data.manuscripts_in_progress %}
    <li>
      {% for author in manuscript.authors %}{% if author.self %}<strong>{{ author.name }}</strong>{% else %}{{ author.name }}{% endif %}{% if author.equal %}<sup>†</sup>{% endif %}{% unless forloop.last %}; {% endunless %}{% endfor %} <strong>{{ manuscript.year }}</strong>
    </li>
  {% endfor %}
</ul>

<h2 id="journal-articles">Journal Articles</h2>

{% include bib_search.liquid %}

<div class="publications">

<h3>First and Co-first Authored Papers</h3>

{% bibliography --file yichao-zhao --query @*[keywords=first] %}

<h3>Collaborative Publications</h3>

{% bibliography --file yichao-zhao --query @*[keywords=collaborative] %}

</div>
