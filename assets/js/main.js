
// First, register required GSAP plugins
gsap.registerPlugin(Power2);

// Initialize variables
const navToggle = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu__links li a');
let isOpen = false;

// Create timeline
const tl = gsap.timeline({ paused: true });

// Build the animation sequence
tl.to(navMenu, {
  visibility: 'visible',
  duration: 0
})
.fromTo(navMenu, {
  clipPath: 'circle(0% at 100% 0)'
}, {
  clipPath: 'circle(150% at 100% 0)',
  duration: 1,
  ease: Power2.easeInOut
})
.to('.nav-menu__content', {
  opacity: 1,
  duration: 0.8,
  ease: Power2.easeOut
}, '-=0.5')
.to(navLinks, {
  y: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: Power2.easeOut
}, '-=0.5');

// Add click event handler
navToggle.addEventListener('click', () => {
  if (!isOpen) {
    // Open menu
    tl.play();
    navToggle.classList.add('active');
  } else {
    // Close menu
    tl.reverse();
    navToggle.classList.remove('active');
  }
  isOpen = !isOpen;
});

// Optional: Close menu when clicking links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    tl.reverse();
    navToggle.classList.remove('active');
    isOpen = false;
  });
});

let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .word', {
  y: '100%',
  opacity: 1,
  duration: 0.5,
  ease: 'sine.out',
  stagger: 0.1,
  
})



var swiper = new Swiper(".inter_agency", {
  // Default settings (for mobile first)
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    // >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
