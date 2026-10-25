---
layout: about
title: Home
permalink: /
subtitle: Postdoctoral Research Fellow · Massachusetts Institute of Technology

profile: false

selected_papers: false
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # enable after adding personal news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  body:has(.home-hero) > .container,
  body:has(.home-hero) #navbar > .container {
    width: calc(100% - 112px);
    max-width: 1280px;
    padding-right: 0;
    padding-left: 0;
  }

  body:has(.home-hero) > .container {
    margin-top: 0 !important;
  }

  .post:has(.home-hero) > .post-header {
    display: none;
  }

  .home-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
    column-gap: clamp(3rem, 6vw, 6rem);
    align-items: start;
    padding-top: clamp(3rem, 5vw, 5rem);
    margin-bottom: 4.5rem;
  }

  .home-kicker {
    margin: 0 0 1.75rem;
    color: var(--global-text-color-light, #6b6b6b);
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.7;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .home-hero h1 {
    margin: 0;
    font-family: "Bodoni MT", Didot, "Times New Roman", serif;
    font-size: clamp(3rem, 5.5vw, 4.75rem);
    font-weight: 400;
    line-height: 1.06;
    letter-spacing: -0.05em;
  }

  .home-biography {
    margin-top: 2.75rem;
    color: color-mix(in srgb, var(--global-text-color, #222) 75%, var(--global-bg-color, #fff));
    font-size: 1.25rem;
    line-height: 1.65;
  }

  .home-biography p {
    margin: 0 0 1.5rem;
  }

  .home-biography p:last-child {
    margin-bottom: 0;
  }

  .home-portrait {
    margin-top: clamp(5rem, 7.5vw, 7rem);
  }

  .home-portrait figure {
    margin: 0;
  }

  .home-portrait picture {
    display: block;
  }

  .home-portrait img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    border-radius: 0;
  }

  .home-activities {
    max-width: 54rem;
    padding-top: 2.5rem;
    margin-bottom: 2.5rem;
    border-top: 1px solid var(--global-divider-color, #e5e5e5);
    font-size: 1.05rem;
    line-height: 1.75;
  }

  .home-activities h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    font-weight: 400;
  }

  .home-activity-list {
    padding: 0;
    margin: 0 0 2rem;
    list-style: none;
  }

  .home-activity-list li {
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr);
    column-gap: 1.25rem;
    margin-bottom: 1.75rem;
  }

  .home-activity-date {
    color: var(--global-text-color-light, #6b6b6b);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .home-activity-list p {
    margin: 0.35rem 0 0;
    font-size: 0.95rem;
  }

  .home-activity-note {
    color: var(--global-text-color-light, #6b6b6b);
  }

  @media (max-width: 899px) {
    .home-hero {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 2.5rem;
      margin-bottom: 3rem;
    }

    .home-portrait {
      width: 100%;
      max-width: 34rem;
      margin-top: 0;
    }
  }

  @media (max-width: 575px) {
    body:has(.home-hero) > .container,
    body:has(.home-hero) #navbar > .container {
      width: calc(100% - 40px);
    }

    .home-hero {
      padding-top: 3rem;
    }

    .home-kicker {
      margin-bottom: 1.5rem;
      font-size: 0.7rem;
      letter-spacing: 0.12em;
    }

    .home-hero h1 {
      font-size: clamp(2.5rem, 11vw, 3rem);
    }

    .home-biography {
      margin-top: 1.75rem;
      font-size: 1.05rem;
      line-height: 1.75;
    }
  }
</style>

<section class="home-hero" aria-labelledby="home-name">
  <div class="home-hero-copy">
    <p class="home-kicker">Understanding and controlling biology at the molecular level</p>
    <h1 id="home-name">Yichao Zhao</h1>
    <div class="home-biography">
    <p>Dr. Yichao Zhao is currently a postdoctoral research fellow co-advised by Professors Daniel Anderson and Robert Langer at MIT. He earned his Ph.D. in Materials Science and Engineering under the supervision of Professor Sam Emaminejad at UCLA in 2021.</p>
    <p>His research integrates materials design, chemical synthesis, and synthetic biology to develop new bioelectronic technologies for multiscale biomarker sensing and precise control of cellular functions.</p>
    </div>
  </div>
  <div class="home-portrait">
    {% include figure.liquid path="assets/img/Yichao_Zhao.jpg" alt="Yichao Zhao" sizes="(min-width: 1400px) 510px, (min-width: 900px) 38vw, (min-width: 576px) 544px, calc(100vw - 40px)" loading="eager" cache_bust=true %}
  </div>
</section>

<section class="home-activities" aria-labelledby="activities">
  <h2 id="activities">Activities</h2>
  <ul class="home-activity-list">
    {% for talk in site.data.conferences limit: 4 %}
    <li>
      <time class="home-activity-date" datetime="{{ talk.year }}-{{ talk.month }}">{{ talk.year }}/{{ talk.month }}</time>
      <div>
        <strong>{{ talk.event | escape }}</strong>{% if talk.location != empty %}, {{ talk.location | escape }}{% endif %}
        <p>{{ talk.title | escape }}</p>
        {% if talk.note != empty %}<p class="home-activity-note">{{ talk.note | escape }}</p>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/research/#activities' | relative_url }}">View all activities &rarr;</a></p>
</section>
