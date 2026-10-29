(() => {
  const initializeComparison = () => {
    const video = document.getElementById("home-comparison-video");
    const toggle = document.getElementById("home-comparison-toggle");
    if (!video || !toggle) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let userPaused = reducedMotion.matches;
    let visible = !("IntersectionObserver" in window);
    video.muted = true;
    video.controls = false;
    toggle.hidden = false;

    const updateButton = () => {
      toggle.textContent = video.paused ? "Play video" : "Pause video";
      toggle.setAttribute("aria-pressed", String(!video.paused));
    };

    const updatePlayback = () => {
      if (!userPaused && visible && !document.hidden) {
        video.play().catch(updateButton);
      } else {
        video.pause();
      }
      updateButton();
    };

    toggle.addEventListener("click", () => {
      userPaused = !video.paused;
      updatePlayback();
    });
    video.addEventListener("play", updateButton);
    video.addEventListener("pause", updateButton);
    document.addEventListener("visibilitychange", updatePlayback);
    reducedMotion.addEventListener("change", (event) => {
      if (event.matches) userPaused = true;
      updatePlayback();
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
          updatePlayback();
        },
        { threshold: [0, 0.25] }
      ).observe(video);
    }
    updatePlayback();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeComparison, { once: true });
  } else {
    initializeComparison();
  }
})();
