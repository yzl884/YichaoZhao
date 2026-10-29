---
layout: page
permalink: /beyond-the-science/
title: Beyond the Science
description: Teaching, mentorship, and life beyond the lab.
nav: true
nav_order: 3
images:
  slider: true
---

<style>
  .mentorship-values .value-block {
    margin-top: 1.75rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--global-divider-color, #e5e5e5);
  }

  .mentorship-values .value-block:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .mentorship-values .value-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 18rem;
    gap: 2rem;
    align-items: start;
  }

  .mentorship-values h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
    line-height: 1.35;
  }

  .mentorship-values .value-copy p:last-child {
    margin-bottom: 0;
  }

  .mentorship-values .value-photo figure {
    margin: 0;
  }

  .mentorship-values .value-photo img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    cursor: default;
  }

  .mentorship-values .value-photo--poster img {
    object-position: center 48%;
  }

  .mentorship-values .value-photo figcaption {
    margin: 0.5rem 0 0;
    color: color-mix(in srgb, var(--global-text-color, #222) 75%, var(--global-bg-color, #fff));
    font-size: 0.85rem;
    line-height: 1.55;
    text-align: left;
  }

  .family-section {
    margin-top: 2.25rem;
    padding-top: 1.75rem;
    border-top: 1px solid var(--global-divider-color, #e5e5e5);
    scroll-margin-top: 6rem;
  }

  .family-section > h2 {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  .family-section > p {
    line-height: 1.75;
  }

  .family-gallery-wrap {
    max-width: 48rem;
    margin: 1.25rem auto 0;
  }

  .family-gallery {
    display: block;
    width: 100%;
    --swiper-navigation-color: var(--global-text-color);
    --swiper-navigation-size: 1.35rem;
    --swiper-navigation-top-offset: calc(50% - 1rem);
    --swiper-pagination-color: var(--global-text-color);
    --swiper-pagination-bullet-inactive-color: var(--global-text-color);
    --swiper-pagination-bullet-inactive-opacity: 0.3;
  }

  .family-gallery swiper-slide {
    height: auto;
    padding-bottom: 2rem;
  }

  .family-gallery:not(:defined) swiper-slide:not(:first-child) {
    display: none;
  }

  .family-gallery figure {
    margin: 0;
  }

  .family-gallery img,
  .family-gallery .family-gallery-placeholder {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    background: color-mix(in srgb, var(--global-text-color, #222) 4%, var(--global-bg-color, #fff));
    object-fit: contain;
    cursor: default;
  }

  .family-gallery .family-gallery-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border: 1px solid var(--global-divider-color, #e5e5e5);
    color: color-mix(in srgb, var(--global-text-color, #222) 65%, var(--global-bg-color, #fff));
  }

  .family-gallery figcaption {
    display: none;
  }

  .family-gallery::part(button-prev),
  .family-gallery::part(button-next) {
    width: 2.25rem;
    height: 2.75rem;
    padding: 0.55rem;
    border-radius: 0.2rem;
    background: color-mix(in srgb, var(--global-bg-color, #fff) 85%, transparent);
  }

  .family-gallery-controls {
    margin-top: 0.5rem;
    text-align: center;
  }

  .family-gallery-controls button {
    padding: 0.4rem 0.75rem;
    border: 1px solid var(--global-divider-color, #e5e5e5);
    border-radius: 0.2rem;
    background: transparent;
    color: var(--global-text-color);
    font: inherit;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .family-gallery-controls button:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 3px;
  }

  @media (max-width: 767px) {
    .mentorship-values .value-row {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.25rem;
    }

    .mentorship-values .value-photo {
      width: 100%;
      max-width: 32rem;
      margin-inline: auto;
    }
  }
</style>

## Teaching and Mentorship

My goal as a teacher and mentor is to help people develop the understanding, confidence, and judgment to think independently, take ownership of their work, and pursue paths that reflect their interests and strengths.

<div class="mentorship-values">
  <section class="value-block value-row" aria-labelledby="teaching-for-understanding">
    <div class="value-copy">
      <h3 id="teaching-for-understanding">Teaching for understanding</h3>
      <p>I want students to be able to explain their reasoning and apply what they learn to unfamiliar problems. I emphasize connections between mathematical models, physical intuition, and practical engineering questions. Short problems, discussion, and written responses give students different ways to participate, test their understanding, and learn from one another. Clear expectations and constructive feedback help make challenging material approachable for students with different preparation.</p>
    </div>
    <div class="value-photo">
      {% include figure.liquid path="assets/img/teaching-mentorship/classroom-lecture.jpg" alt="Yichao Zhao giving a classroom lecture on bioelectronics" caption="A classroom lecture on bioelectronics for continuous sensing and living therapeutics." sizes="(min-width: 768px) 288px, (min-width: 576px) 512px, calc(100vw - 48px)" zoomable=false %}
    </div>
  </section>

  <section class="value-block value-row" aria-labelledby="building-independence-through-support">
    <div class="value-copy">
      <h3 id="building-independence-through-support">Building independence through support</h3>
      <p>I believe high expectations work best alongside strong support. Guidance should evolve as each person gains experience. Regular conversations, clear goals, and thoughtful feedback provide a foundation for trainees to take increasing responsibility for their work. My aim is to help them develop their own questions, evaluate evidence, and decide which directions are worth pursuing.</p>
    </div>
    <div class="value-photo value-photo--poster">
      {% include figure.liquid path="assets/img/teaching-mentorship/isabella-perez-thesis-poster.jpg" alt="Isabella Perez discussing her undergraduate thesis poster at MIT" caption="Isabella Perez presenting her undergraduate thesis poster at MIT. Recipient of the <strong>Best Thesis Poster Presentation Award</strong>." sizes="(min-width: 768px) 288px, (min-width: 576px) 512px, calc(100vw - 48px)" zoomable=false %}
    </div>
  </section>

  <section class="value-block value-row" aria-labelledby="creating-a-culture-of-openness-and-responsibility">
    <div class="value-copy">
      <h3 id="creating-a-culture-of-openness-and-responsibility">Creating a culture of openness and responsibility</h3>
      <p>I want to build a research environment where people feel comfortable asking questions, discussing setbacks, and challenging interpretations. This openness comes with responsibility for data integrity, reproducibility, and fair credit. Transparent expectations about project roles, authorship, and professional opportunities help people work together with trust. I value both ownership of individual projects and the willingness to share methods, ideas, and expertise.</p>
    </div>
    <div class="value-photo">
      {% include figure.liquid path="assets/img/teaching-mentorship/ucla-summer-research-lunch.jpg" alt="UCLA lab members sharing lunch with undergraduate and high school summer researchers" caption="A summer research lunch at UCLA, bringing together lab members and undergraduate and high school researchers." sizes="(min-width: 768px) 288px, (min-width: 576px) 512px, calc(100vw - 48px)" zoomable=false %}
    </div>
  </section>

  <section class="value-block value-row" aria-labelledby="supporting-individual-paths">
    <div class="value-copy">
      <h3 id="supporting-individual-paths">Supporting individual paths</h3>
      <p>Career development is an essential part of mentorship. I value conversations about personal goals alongside discussions of scientific progress. Writing, presenting, collaborating, and teaching provide opportunities to build skills that extend beyond any single project. I want trainees to leave with the confidence and preparation to pursue careers that suit them, whether in academia, industry, or another setting.</p>
    </div>
    <div class="value-photo">
      {% include figure.liquid path="assets/img/teaching-mentorship/monica-xu-thesis-defense.jpg" alt="Monica Xu at her thesis defense at Wellesley College" caption="Monica Xu at her honors thesis defense at Wellesley College." sizes="(min-width: 768px) 288px, (min-width: 576px) 512px, calc(100vw - 48px)" zoomable=false %}
    </div>
  </section>
</div>

<section class="family-section" aria-labelledby="family-and-friendship">
  <h2 id="family-and-friendship">Family and Friendship</h2>
  <p>Many of the friendships I value most began through working and learning together. People I first knew as mentors, students, collaborators, or colleagues have become friends whose place in my life extends well beyond research. We’ve shared the excitement of making progress and the frustration of setbacks, and we continue to learn from, encourage, and support one another. At the center of my life is my family. I’m grateful for my wife’s support and for the company of our two cats, who bring warmth and joy to everyday life. My family makes home a place where I can recharge, be myself, and find the encouragement to keep going.</p>

  <div class="family-gallery-wrap">
    <swiper-container
      id="family-gallery"
      class="family-gallery"
      init="false"
      navigation="true"
      pagination="true"
      pagination-clickable="true"
      keyboard="true"
      rewind="true"
      autoplay="true"
      autoplay-delay="5000"
      autoplay-disable-on-interaction="false"
      autoplay-pause-on-mouse-enter="true"
      role="region"
      aria-roledescription="carousel"
      aria-label="Family and friendship photos"
    >
      {% for photo in site.data.family_gallery %}
        <swiper-slide>
          {% if photo.image and photo.image != '' %}
            {% assign gallery_caption = photo.title | escape %}
            {% include figure.liquid path=photo.image alt=photo.alt caption=gallery_caption sizes="(min-width: 800px) 768px, calc(100vw - 48px)" zoomable=false %}
          {% else %}
            <figure>
              <div class="family-gallery-placeholder">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <rect x="6" y="8" width="36" height="32" rx="2"></rect>
                  <circle cx="16" cy="18" r="3"></circle>
                  <path d="M7 34l11-10 8 7 7-8 9 10"></path>
                </svg>
                <span>Photos coming soon</span>
              </div>
              <figcaption>{{ photo.title | escape }}</figcaption>
            </figure>
          {% endif %}
        </swiper-slide>
      {% endfor %}
    </swiper-container>
    <div class="family-gallery-controls">
      <button id="family-gallery-toggle" type="button" aria-controls="family-gallery" aria-pressed="false" hidden>Pause slideshow</button>
    </div>
  </div>
</section>

<script defer src="{{ '/assets/js/family-gallery.js' | relative_url }}"></script>
