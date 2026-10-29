---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 1
---

<style>
  body:has(.research-figure) h2 {
    clear: both;
  }

  .research-figure {
    position: relative;
    float: right;
    max-width: 20rem;
    margin: 0 0 1rem 1.75rem;
  }

  .research-figure.research-figure-sensors {
    width: 17.5rem;
    max-width: 100%;
  }

  .research-figure figure {
    margin: 0;
  }

  .research-figure img {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    cursor: default;
  }

  .research-image-credit {
    position: absolute;
    right: 0.35rem;
    bottom: 0.35rem;
    padding: 0.15rem 0.35rem;
    border-radius: 0.15rem;
    background: rgb(0 0 0 / 55%);
    color: #fff;
    font-size: 0.65rem;
    line-height: 1.4;
    pointer-events: none;
  }

  .research-clear {
    clear: both;
  }

  @media (max-width: 600px) {
    .research-figure {
      float: none;
      width: fit-content;
      max-width: 100%;
      margin: 0 auto 1.25rem;
    }

  }
</style>

## Research Overview

From smartwatches to pacemakers, electronics have transformed how we monitor and care for the body. However, current devices remain limited in their ability to interface with biology at the molecular level: for example, to read information carried by DNA, RNA, and proteins or to control cellular functions by regulating gene expression and protein activity. Bridging this gap requires electronics capable of communicating with biology in its native molecular language. To this end, my research incorporates programmable biomolecular systems into materials design to create a new class of biochemical electronics capable of health monitoring at the molecular level and precise control of cellular functions for disease treatment. My goal is to bring these capabilities into everyday care, supporting earlier disease detection, continuous health management, and personalized treatment.

## 1. Biochemical sensors for understanding the body’s changing chemistry

<div class="research-figure research-figure-sensors">
  {% include figure.liquid path="assets/img/research/biosensor-interface.jpg" alt="A biochemical sensing interface." sizes="(min-width: 328px) 280px, calc(100vw - 48px)" zoomable=false %}
  <span class="research-image-credit">Credit: J.T.</span>
</div>

The body’s chemistry changes all the time, but we usually measure it only occasionally. My goal is to develop biosensors that continuously track a wider range of molecules in the body, from small-molecule metabolites to peptides and proteins. Achieving this requires addressing three central challenges:

1. **Selectivity:** Can sensors distinguish their target molecules from the many other substances present in the body?
2. **Sensitivity:** Can they detect molecules at the levels found in the body and resolve small changes over time?
3. **Stability:** Can they maintain reliable measurements over long periods as conditions in the body change?

My research combines biomolecular systems with electrochemical materials design to address these challenges. These sensors would help us understand how the body’s chemistry changes during daily life, disease, and treatment. The long-term goal is to detect disease earlier and guide treatment based on how each person’s body responds.

## 2. Biochemical modulators for precise control of cellular functions

<div class="research-figure">
  <img src="{{ '/assets/img/research/cellular-control-comparison-vivid.svg' | relative_url }}" alt="Two matched views of the same cells: no stimulation on the left, and stimulation through biochemical modulator electronics on the right. Both panels use the same vivid emerald color mapping and are separated by a light divider." width="1200" height="900" loading="lazy" decoding="async">
  <span class="research-image-credit">Credit: Y.Z.</span>
</div>

Electrical stimulation has transformed the treatment of conditions such as abnormal heart rhythms and certain neurological disorders. I want to expand what electronics can control in the body, enabling more selective regulation of cellular functions for disease treatment.

To achieve this, I develop electrochemical materials that translate electrical inputs into chemical signals. These biochemical modulators are designed to provide two capabilities:

1. **Pathway selectivity:** Target specific cellular signaling pathways, allowing more precise control over which cellular functions are regulated.
2. **Broader functional control:** Extend electronic control to cellular functions that are difficult to regulate through direct electrical stimulation.

I aim to apply these modulators both to cells and tissues already in the body and to engineered cells in therapeutic implants. For these living therapies, external control could allow clinicians to adjust when and how much medicine the cells release. The long-term goal is to make treatment more effective and safer by allowing therapeutic activity to be adjusted as a patient’s needs change.

## 3. Fully integrated biochemical electronics for translational applications

<div class="research-figure">
  {% include figure.liquid path="assets/img/research/integrated-wearable-device.jpg" alt="An integrated wearable biochemical sensing device on a wrist." sizes="(min-width: 601px) 320px, calc(100vw - 48px)" zoomable=false %}
  <span class="research-image-credit">Credit: P.N.</span>
</div>

I want to turn advances in molecular sensing and cellular control into complete medical devices that can work reliably in everyday care. This direction brings together materials, biochemical interfaces, and device engineering to create wearable, implantable, and point-of-care systems. One long-term goal is to link molecular measurements with controlled therapeutic responses, allowing devices to act on the information they collect. I am equally interested in what makes these systems practical, including sustained operation, ease of use, and meaningful information for patients and clinicians. By developing and evaluating integrated devices around specific clinical needs, I aim to make biochemical electronics useful for early disease detection, continuous health management, and personalized treatment.

<div class="research-clear"></div>
