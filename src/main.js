const ctaSection = document.querySelector('.cta-section');
const ctaContainer = document.querySelector('.cta-container');
const ctaOverlay = document.querySelector('.cta-overlay');
const ctaText = document.querySelector('.cta-text');
const ctaButton = document.querySelector('.cta-button');

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ctaContainer.classList.add('animate-cta-container');
      ctaOverlay.classList.add('animate-cta-overlay');
      ctaText.classList.add('animate-cta-text');
      ctaButton.classList.add('animate-cta-button');

      observer.unobserve(ctaSection);
    }
  });
};

const observerOptions = {
  root: null,
  threshold: 0.8,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(ctaSection);
