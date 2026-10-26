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

<span id="in-the-news"></span>

Media coverage appears beneath the corresponding article.

Select a figure to enlarge it, or use the PDF button to read or download the full paper.

<h2 id="journal-articles">Journal Articles</h2>

\* Equal contribution.

{% include bib_search.liquid %}

<div class="publications">

<h3>First and Co-first Authored Papers</h3>

{% bibliography --file yichao-zhao --query @*[keywords=first] %}

<h3>Collaborative Publications</h3>

{% bibliography --file yichao-zhao --query @*[keywords=collaborative] %}

</div>
