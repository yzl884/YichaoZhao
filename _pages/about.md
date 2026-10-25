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

  .home-research {
    max-width: 54rem;
    padding-top: 2.5rem;
    margin-bottom: 2.5rem;
    border-top: 1px solid var(--global-divider-color, #e5e5e5);
    font-size: 1.05rem;
    line-height: 1.75;
  }

  .home-research h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    font-weight: 400;
  }

  .home-research p {
    margin-bottom: 1.35rem;
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

<section class="home-research" aria-labelledby="research-overview">
  <h2 id="research-overview">Research Overview</h2>

  <p>Bioelectronics such as smartwatches, neural stimulators, and pacemakers have transformed our ability to monitor and modulate physical signals. The next frontier is extending these technologies to continuously monitor biochemical markers and deliver therapeutics, enabling a more decentralized and personalized model of healthcare.</p>

  <p>I develop tissue-like bioelectronics for continuous <em>in vivo</em> biochemical monitoring. To overcome signal distortion caused by tissue deformation, I developed strain-insensitive electrochemical materials that decouple mechanical interference from true biochemical readouts. These tools enable high-fidelity pharmacokinetic studies in interstitial and cerebrospinal fluids.</p>

  <p>I also develop cell-based implants as “living medicines.” While promising, their translation is hindered by a lack of precise control over therapeutic secretion <em>in vivo</em>. My work introduces a new class of solid-state electrolytes that bioelectronically modulate endogenous ion pathways in mammalian cells, enabling the rapid, on-demand release of therapeutic proteins.</p>
</section>
