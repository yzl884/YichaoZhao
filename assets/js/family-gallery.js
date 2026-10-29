(() => {
  const initializeGallery = () => {
    const gallery = document.getElementById("family-gallery");
    const toggle = document.getElementById("family-gallery-toggle");
    if (!gallery || !toggle || !window.customElements) return;

    customElements.whenDefined("swiper-container").then(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      gallery.speed = reducedMotion.matches ? 0 : 350;
      gallery.initialize();
      const swiper = gallery.swiper;
      if (!swiper || !swiper.autoplay) return;

      const multiplePhotos = gallery.querySelectorAll("swiper-slide").length > 1;
      let userPaused = reducedMotion.matches;
      let visible = !("IntersectionObserver" in window);

      const updatePlayback = () => {
        const shouldPlay = multiplePhotos && !userPaused && visible && !document.hidden;
        if (shouldPlay && !swiper.autoplay.running) swiper.autoplay.start();
        if (!shouldPlay && swiper.autoplay.running) swiper.autoplay.stop();
        toggle.textContent = userPaused ? "Play slideshow" : "Pause slideshow";
        toggle.setAttribute("aria-pressed", String(userPaused));
      };

      toggle.hidden = !multiplePhotos;
      toggle.addEventListener("click", () => {
        userPaused = !userPaused;
        updatePlayback();
      });

      document.addEventListener("visibilitychange", updatePlayback);
      reducedMotion.addEventListener("change", (event) => {
        swiper.params.speed = event.matches ? 0 : 350;
        if (event.matches) userPaused = true;
        updatePlayback();
      });

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
            updatePlayback();
          },
          { threshold: [0, 0.25] }
        );
        observer.observe(gallery);
      }
      updatePlayback();
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeGallery, { once: true });
  } else {
    initializeGallery();
  }
})();
