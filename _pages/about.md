---
layout: about
title: Home
permalink: /
subtitle: Postdoctoral Research Fellow · Massachusetts Institute of Technology

profile: false

selected_papers: false
social: false # hide social icons at the bottom of the homepage

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
    grid-template-areas: "intro portrait" "background comparison";
    column-gap: clamp(3rem, 6vw, 6rem);
    row-gap: 1.5rem;
    align-items: start;
    padding-top: 1rem;
    margin-bottom: 2.5rem;
  }

  .home-hero-copy {
    grid-area: intro;
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

  .home-biography.home-background {
    grid-area: background;
    margin-top: 0;
  }

  .home-portrait {
    grid-area: portrait;
    width: 100%;
    max-width: 26rem;
    justify-self: end;
    align-self: end;
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

  .home-comparison {
    grid-area: comparison;
    width: 100%;
    max-width: 26rem;
    justify-self: end;
    margin: 0;
  }

  .home-comparison video {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 864 / 490;
    background: #03090c;
  }

  .home-comparison figcaption {
    margin: 0.75rem 0 0;
    color: color-mix(in srgb, var(--global-text-color, #222) 75%, var(--global-bg-color, #fff));
    font-size: 0.9rem;
    line-height: 1.55;
    text-align: left;
  }

  .home-comparison figcaption strong {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--global-text-color);
    font-size: 1rem;
    font-weight: 500;
  }

  .home-comparison-toolbar {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
    gap: 1rem;
    margin-top: 0.65rem;
    color: color-mix(in srgb, var(--global-text-color, #222) 75%, var(--global-bg-color, #fff));
    font-size: 0.75rem;
  }

  .home-comparison-toolbar button {
    grid-area: 1 / 2;
    justify-self: end;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--global-divider-color, #e5e5e5);
    border-radius: 0.2rem;
    background: transparent;
    color: var(--global-text-color);
    font: inherit;
    cursor: pointer;
  }

  .home-comparison-credits {
    grid-area: 1 / 1 / 2 / -1;
    color: color-mix(in srgb, var(--global-text-color, #222) 75%, var(--global-bg-color, #fff));
    font-size: 0.75rem;
    line-height: 1.6;
  }

  .home-comparison-credits summary {
    width: fit-content;
    max-width: calc(100% - 6rem);
    padding-top: 0.25rem;
    cursor: pointer;
  }

  .home-comparison-credits p {
    margin: 0.6rem 0 0;
  }

  .home-comparison button:focus-visible,
  .home-comparison summary:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 3px;
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
    scroll-margin-top: 8rem;
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

  .home-activities-more > summary {
    width: fit-content;
    margin-bottom: 1.75rem;
    color: var(--global-theme-color);
    cursor: pointer;
  }

  .home-activities-more > summary:hover {
    text-decoration: underline;
  }

  .home-activities-more > summary:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  .home-activities-more .activities-show-fewer,
  .home-activities-more[open] .activities-show-all {
    display: none;
  }

  .home-activities-more[open] .activities-show-fewer {
    display: inline;
  }

  @media (max-width: 899px) {
    .home-hero {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "intro" "portrait" "background" "comparison";
      row-gap: 1.75rem;
      margin-bottom: 2.5rem;
    }

    .home-portrait,
    .home-comparison {
      width: 100%;
      max-width: 34rem;
      margin-top: 0;
      justify-self: start;
    }
  }

  @media (max-width: 575px) {
    body:has(.home-hero) > .container,
    body:has(.home-hero) #navbar > .container {
      width: calc(100% - 40px);
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
    <p>I am Yichao Zhao, a postdoctoral researcher at MIT working with Professors Daniel Anderson and Robert Langer. My research focuses on developing biochemical electronics for continuous molecular sensing and precise control of cellular functions.</p>
    </div>
  </div>
  <div class="home-portrait">
    {% include figure.liquid path="assets/img/Yichao_Zhao.jpg" alt="Yichao Zhao" sizes="(min-width: 1400px) 510px, (min-width: 900px) 38vw, (min-width: 576px) 544px, calc(100vw - 40px)" loading="eager" cache_bust=true %}
  </div>
  <div class="home-biography home-background">
    <p>My current work focuses on electrochemical materials that translate electrical inputs into chemical cues to regulate specific cellular signaling pathways. This platform enables on-demand release of therapeutic proteins, providing a foundation for responsive cell-based therapies. I received my Ph.D. in Materials Science and Engineering from UCLA, advised by Professor Sam Emaminejad. There, I developed tissue-like biosensors for continuous molecular monitoring, enabling pharmacokinetic studies in animal models and metabolic monitoring in human participants.</p>
  </div>
    <figure class="home-comparison">
      <video id="home-comparison-video" muted loop playsinline controls controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture preload="metadata" poster="{{ '/assets/img/biology-electronics-poster.jpg' | relative_url }}" aria-label="Visual comparison of calcium signaling in living cells and transistor photon emission. Appearance and playback speed have been adjusted independently.">
        <source src="{{ '/assets/video/biology-electronics-comparison.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support video playback.
      </video>
      <figcaption><strong>Biology meets electronics</strong>Connecting the signals of cells and circuits.</figcaption>
      <div class="home-comparison-toolbar">
        <button id="home-comparison-toggle" type="button" aria-controls="home-comparison-video" aria-pressed="false" hidden>Play video</button>
      <details class="home-comparison-credits">
        <summary>Edited comparison &amp; credits</summary>
        <p>Biology: intracellular calcium activity in CaSR-HEK cells, recorded by Yichao Zhao.</p>
        <p>Electronics: adapted excerpt from Dmitry Nedospasov, <a href="https://media.ccc.de/v/30C3_-_5459_-__-_saal_1_-_201312282145_-_security_of_the_ic_backside_-_nedos">Security of the IC Backside</a>, 30C3 (2013), approximately 31:00–31:06. Source licensed under <a href="https://creativecommons.org/licenses/by/3.0/de/">CC BY 3.0 DE</a>.</p>
        <p>The clips were cropped, recolored, contrast-adjusted and independently retimed for visual comparison. Displayed size and timing are not a quantitative comparison.</p>
        <p>Related background: <a href="https://doi.org/10.1007/s13389-013-0053-7">Simple photonic emission analysis of AES</a> (2013). The excerpt is credited to the talk; it has not been verified as supplementary video for this paper.</p>
      </details>
      </div>
    </figure>
</section>

<script defer src="{{ '/assets/js/home-comparison.js' | relative_url }}"></script>

<section class="home-activities" aria-labelledby="activities">
  <h2 id="activities">Activities</h2>
  <p>Talks, conference presentations, and coauthored contributions. * Equal contribution.</p>
  <ul class="home-activity-list">
    {% for talk in site.data.conferences limit: 4 %}
    <li>
      <time class="home-activity-date" datetime="{{ talk.year }}-{{ talk.month }}">{{ talk.year }}/{{ talk.month }}</time>
      <div>
        <strong>{{ talk.event | escape }}</strong>{% if talk.location != empty %}, {{ talk.location | escape }}{% endif %}
        <p>{{ talk.title | escape }}</p>
        <p>{{ talk.authors | escape | replace: 'Zhao, Y.', '<strong>Zhao, Y.</strong>' }}</p>
        {% if talk.note != empty %}<p class="home-activity-note">{{ talk.note | escape }}</p>{% endif %}
        {% if talk.doi != empty %}<p><a href="https://doi.org/{{ talk.doi }}">DOI</a></p>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ul>
  {% if site.data.conferences.size > 4 %}
  <details class="home-activities-more">
    <summary><span class="activities-show-all">View all activities</span><span class="activities-show-fewer">Show fewer activities</span></summary>
    <ul class="home-activity-list">
      {% for talk in site.data.conferences offset: 4 %}
      <li>
        <time class="home-activity-date" datetime="{{ talk.year }}-{{ talk.month }}">{{ talk.year }}/{{ talk.month }}</time>
        <div>
          <strong>{{ talk.event | escape }}</strong>{% if talk.location != empty %}, {{ talk.location | escape }}{% endif %}
          <p>{{ talk.title | escape }}</p>
          <p>{{ talk.authors | escape | replace: 'Zhao, Y.', '<strong>Zhao, Y.</strong>' }}</p>
          {% if talk.note != empty %}<p class="home-activity-note">{{ talk.note | escape }}</p>{% endif %}
          {% if talk.doi != empty %}<p><a href="https://doi.org/{{ talk.doi }}">DOI</a></p>{% endif %}
        </div>
      </li>
      {% endfor %}
    </ul>
  </details>
  {% endif %}
</section>
