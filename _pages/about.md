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
  .home-intro {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 2.25rem;
    align-items: start;
    margin-bottom: 2.5rem;
  }

  .home-intro-copy h2 {
    margin-top: 0;
  }

  .home-intro-copy p:last-child {
    margin-bottom: 0;
  }

  .home-portrait figure {
    margin: 0;
  }

  .home-portrait img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: 50% 40%;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    .home-intro {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.5rem;
    }

    .home-portrait {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
  }
</style>

<section class="home-intro" aria-labelledby="biography">
  <div class="home-intro-copy">
    <h2 id="biography">Biography</h2>
    <p>Dr. Yichao Zhao is currently a postdoctoral research fellow co-advised by Professors Daniel Anderson and Robert Langer at MIT. He earned his Ph.D. in Materials Science and Engineering under the supervision of Professor Sam Emaminejad at UCLA in 2021.</p>
    <p>His research integrates materials design, chemical synthesis, and synthetic biology to develop new bioelectronic technologies for multiscale biomarker sensing and precise control of cellular functions.</p>
  </div>
  <div class="home-portrait">
    {% include figure.liquid path="assets/img/Yichao_Zhao.jpg" alt="Yichao Zhao" sizes="320px" loading="eager" cache_bust=true %}
  </div>
</section>

## Research Overview

Bioelectronics such as smartwatches, neural stimulators, and pacemakers have transformed our ability to monitor and modulate physical signals. The next frontier is extending these technologies to continuously monitor biochemical markers and deliver therapeutics, enabling a more decentralized and personalized model of healthcare.

I develop tissue-like bioelectronics for continuous _in vivo_ biochemical monitoring. To overcome signal distortion caused by tissue deformation, I developed strain-insensitive electrochemical materials that decouple mechanical interference from true biochemical readouts. These tools enable high-fidelity pharmacokinetic studies in interstitial and cerebrospinal fluids.

I also develop cell-based implants as “living medicines.” While promising, their translation is hindered by a lack of precise control over therapeutic secretion _in vivo_. My work introduces a new class of solid-state electrolytes that bioelectronically modulate endogenous ion pathways in mammalian cells, enabling the rapid, on-demand release of therapeutic proteins.
