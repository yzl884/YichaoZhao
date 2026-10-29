---
layout: page
permalink: /beyond-the-science/
title: Beyond the Science
description: Teaching, mentorship, and interests beyond research.
nav: true
nav_order: 3
---

<style>
  .mentorship-values .value-block {
    margin-top: 2.5rem;
    padding-bottom: 2.25rem;
    border-bottom: 1px solid var(--global-divider-color, #e5e5e5);
  }

  .mentorship-values .value-block:last-child {
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
    margin-bottom: 1rem;
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
  }

  .mentorship-values .value-photo--poster img {
    object-position: center 48%;
  }

  .mentorship-values .value-photo-link {
    display: block;
    color: inherit;
    text-decoration: none;
    cursor: zoom-in;
  }

  .mentorship-values .value-photo-link:hover {
    text-decoration: none;
  }

  .mentorship-values .value-photo-link:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 5px;
  }

  .mentorship-values .value-photo figcaption {
    margin-top: 0.65rem;
    color: color-mix(in srgb, var(--global-text-color, #222) 75%, var(--global-bg-color, #fff));
    font-size: 0.85rem;
    line-height: 1.55;
    text-align: left;
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
      <a class="value-photo-link" href="{{ '/assets/img/teaching-mentorship/classroom-lecture.jpg' | relative_url }}" target="_blank" rel="noopener noreferrer" title="View full photograph">
        {% include figure.liquid path="assets/img/teaching-mentorship/classroom-lecture.jpg" alt="Yichao Zhao giving a classroom lecture on bioelectronics" caption="A classroom lecture on bioelectronics for continuous sensing and living therapeutics." sizes="(min-width: 768px) 288px, (min-width: 576px) 512px, calc(100vw - 48px)" %}
      </a>
    </div>
  </section>

  <section class="value-block value-row" aria-labelledby="building-independence-through-support">
    <div class="value-copy">
      <h3 id="building-independence-through-support">Building independence through support</h3>
      <p>I believe high expectations work best alongside strong support. Guidance should evolve as each person gains experience. Regular conversations, clear goals, and thoughtful feedback provide a foundation for trainees to take increasing responsibility for their work. My aim is to help them develop their own questions, evaluate evidence, and decide which directions are worth pursuing.</p>
    </div>
    <div class="value-photo value-photo--poster">
      <a class="value-photo-link" href="{{ '/assets/img/teaching-mentorship/isabella-perez-thesis-poster.jpg' | relative_url }}" target="_blank" rel="noopener noreferrer" title="View full photograph">
        {% include figure.liquid path="assets/img/teaching-mentorship/isabella-perez-thesis-poster.jpg" alt="Isabella Perez discussing her undergraduate thesis poster at MIT" caption="Isabella Perez presenting her undergraduate thesis poster at MIT. Recipient of the <strong>Best Thesis Poster Presentation Award</strong>." sizes="(min-width: 768px) 288px, (min-width: 576px) 512px, calc(100vw - 48px)" %}
      </a>
    </div>
  </section>

  <section class="value-block" aria-labelledby="creating-a-culture-of-openness-and-responsibility">
    <div class="value-copy">
      <h3 id="creating-a-culture-of-openness-and-responsibility">Creating a culture of openness and responsibility</h3>
      <p>I want to build a research environment where people feel comfortable asking questions, discussing setbacks, and challenging interpretations. This openness comes with responsibility for data integrity, reproducibility, and fair credit. Transparent expectations about project roles, authorship, and professional opportunities help people work together with trust. I value both ownership of individual projects and the willingness to share methods, ideas, and expertise.</p>
    </div>
  </section>

  <section class="value-block value-row" aria-labelledby="supporting-individual-paths">
    <div class="value-copy">
      <h3 id="supporting-individual-paths">Supporting individual paths</h3>
      <p>Career development is an essential part of mentorship. I value conversations about personal goals alongside discussions of scientific progress. Writing, presenting, collaborating, and teaching provide opportunities to build skills that extend beyond any single project. I want trainees to leave with the confidence and preparation to pursue careers that suit them, whether in academia, industry, or another setting.</p>
    </div>
    <div class="value-photo">
      <a class="value-photo-link" href="{{ '/assets/img/teaching-mentorship/monica-xu-thesis-defense.jpg' | relative_url }}" target="_blank" rel="noopener noreferrer" title="View full photograph">
        {% include figure.liquid path="assets/img/teaching-mentorship/monica-xu-thesis-defense.jpg" alt="Monica Xu at her thesis defense at Wellesley College" caption="Monica Xu at her honors thesis defense at Wellesley College." sizes="(min-width: 768px) 288px, (min-width: 576px) 512px, calc(100vw - 48px)" %}
      </a>
    </div>
  </section>
</div>
