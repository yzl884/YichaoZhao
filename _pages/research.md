---
layout: page
title: Research
permalink: /research/
description: Materials, bioelectronics, and electrochemical interfaces for health.
nav: true
nav_order: 1
---

## Research Focus

My research connects materials science, electrochemical biosensing, and bioelectronics to develop wearable and implantable systems for monitoring biological processes and supporting therapeutic applications.

- **Wearable and implantable biosensing:** Electrochemical interfaces for monitoring metabolites, hormones, electrolytes, and therapeutics.
- **Soft bioelectronics:** Flexible and strain-insensitive materials and interfaces that preserve sensing performance during deformation.
- **Biomaterials for cell therapies:** Antifouling, immunoisolation, and hydrogel materials for implantable cell encapsulation devices.

[Publications]({{ '/publications/' | relative_url }}) · [Talks & Conferences](#talks-conferences)

<h2 id="talks-conferences">Talks &amp; Conferences</h2>

Conference presentations and coauthored contributions. Presentation types and distinctions are noted where specified. \* Equal contribution.

{% assign conference_year = 0 %}
{% for talk in site.data.conferences %}
{% if talk.year != conference_year %}

### {{ talk.year }}

{% assign conference_year = talk.year %}
{% endif %}

<p class="conference-entry">
  <strong>{{ talk.title | escape }}</strong><br>
  {{ talk.authors | escape | replace: 'Zhao, Y.', '<strong>Zhao, Y.</strong>' }}<br>
  <em>{{ talk.event | escape }}</em>{% if talk.location != empty %}, {{ talk.location | escape }}{% endif %}.
  {% if talk.note != empty %}<strong>{{ talk.note | escape }}.</strong>{% endif %}
  {% if talk.doi != empty %}<a href="https://doi.org/{{ talk.doi }}">DOI</a>{% endif %}
</p>

{% endfor %}
