const poolShapeSection = document.querySelector('.pool-shape-section');
const projectSection = document.querySelector('.project-section')
const ctaSection = document.querySelector('.cta-section');
const ctaContainer = document.querySelector('.cta-container');
const ctaOverlay = document.querySelector('.cta-overlay');
const ctaText = document.querySelector('.cta-text');
const ctaButton = document.querySelector('.cta-button');

const poolShapeObserverCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      poolShapeSection.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const poolShapeObserverOptions = {
  root: null,
  threshold: 0.1,
};

const poolShapeObserver = new IntersectionObserver(
  poolShapeObserverCallback,
  poolShapeObserverOptions
);

const projectObserverCallback = (entries, observer)=>{
  entries.forEach(entry=>{
if(entry.isIntersecting){
  projectSection.classList.add('visible');
  observer.unobserve(entry.target);
}
  });
};

const projectObserverOptions = {
  root: null,
  threshold:0.1
}

const projectObserver = new IntersectionObserver(
  projectObserverCallback,
  projectObserverOptions
)



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

poolShapeObserver.observe(poolShapeSection);
projectObserver.observe(projectSection);
ctaObserver.observe(ctaSection);
