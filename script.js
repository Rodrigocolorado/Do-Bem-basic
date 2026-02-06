const videos = document.querySelectorAll(".auto-video");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;

    if (entry.isIntersecting) {

      // carrega o vídeo só quando aparece
      const source = video.querySelector("source");
      if (source.dataset.src) {
        source.src = source.dataset.src;
        video.load();
      }

      video.play();

    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.5 // toca quando 50% do vídeo estiver visível
});

videos.forEach(video => observer.observe(video));
