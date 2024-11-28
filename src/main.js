const poolShapeSection = document.querySelector('.pool-shape-section');
const projectSection = document.querySelector('.project-section')
const ctaSection = document.querySelector('.cta-section');
const ctaContainer = document.querySelector('.cta-container');
const ctaOverlay = document.querySelector('.cta-overlay');
const ctaText = document.querySelector('.cta-text');
const ctaButton = document.querySelector('.cta-button');


const handleScroll = () => {
  poolShapeSection.classList.add('visible');
  projectSection.classList.add('visible');
 
  window.removeEventListener('scroll', handleScroll);
};

window.addEventListener('scroll', handleScroll);



const ctaObserverCallback = (entries, observer) => {
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

const ctaObserverOptions = {
  root: null,
  threshold: 0.8,
};

const ctaObserver = new IntersectionObserver(ctaObserverCallback, ctaObserverOptions);


ctaObserver.observe(ctaSection);
