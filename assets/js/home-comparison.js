(() => {
  const initializeComparison = () => {
    const video = document.getElementById("home-comparison-video");
    const toggle = document.getElementById("home-comparison-toggle");
    if (!video || !toggle) return;

    let userPaused = false;
    let playPending = false;
    video.defaultMuted = true;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    toggle.hidden = false;

    const updateButton = () => {
      toggle.textContent = video.paused ? "Play video" : "Pause video";
      toggle.setAttribute("aria-pressed", String(!video.paused));
    };

    const updatePlayback = () => {
      if (userPaused || document.hidden) {
        video.pause();
        updateButton();
        return;
      }

      if (!video.paused || playPending) {
        updateButton();
        return;
      }
      playPending = true;
      let playRequest;
      try {
        playRequest = video.play();
      } catch {
        playPending = false;
        updateButton();
        return;
      }
      Promise.resolve(playRequest)
        .then(() => {
          if (userPaused || document.hidden) video.pause();
        })
        .catch(() => {
          // Browser policy can require a user gesture even for muted media.
        })
        .finally(() => {
          playPending = false;
          updateButton();
        });
      updateButton();
    };

    toggle.addEventListener("click", () => {
      userPaused = !video.paused;
      updatePlayback();
    });
    video.addEventListener("playing", updateButton);
    video.addEventListener("pause", updateButton);
    video.addEventListener("loadeddata", updatePlayback);
    video.addEventListener("canplay", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);
    window.addEventListener("pageshow", updatePlayback);

    // If automatic playback was blocked, retry directly within an allowed gesture.
    const resumeOnInteraction = (event) => {
      if (event.target === toggle || toggle.contains(event.target)) return;
      if (!userPaused && video.paused) updatePlayback();
    };
    for (const eventName of ["click", "touchend", "keydown"]) {
      document.addEventListener(eventName, resumeOnInteraction, { passive: true });
    }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) updatePlayback();
        },
        { threshold: 0 }
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
