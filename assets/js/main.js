document.addEventListener('DOMContentLoaded', () => {
  // Modified helper function to handle spaces correctly
  const splitText = (element) => {
    const text = element.textContent;
    element.textContent = '';
    
    return text.split('').map(char => {
      const span = document.createElement('span');
      // For spaces, use a non-breaking space and add a specific class
      if (char === ' ') {
        span.textContent = '\u00A0'; // non-breaking space
        span.classList.add('space');
      } else {
        span.textContent = char;
      }
      span.style.display = 'inline-block';
      element.appendChild(span);
      return span;
    });
  };

  // Get all title elements
  const visionTitle = document.querySelector('.hero__title_vision');
  const ourTitle = document.querySelector('.hero__title_our');
  const designTitle = document.querySelector('.hero__title_design');

  // Split each title into characters
  const visionChars = splitText(visionTitle);
  const ourChars = splitText(ourTitle);
  const designChars = splitText(designTitle);

  // Create GSAP timeline
  const tl = gsap.timeline();

  // Initial state
  gsap.set([visionChars, ourChars, designChars], {
    opacity: 0,
    y: 50
  });

  // Animate titles
  tl.to(visionChars, {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: "back.out(1.7)"
  })
  .to(ourChars, {
    duration: 0.6,
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: "power2.out"
  }, "-=0.3")
  .to(designChars, {
    duration: 0.6,
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: "elastic.out(1, 0.3)"
  }, "-=0.3");
});

// cta text animation 
document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Helper function to split text while maintaining flex layout
  const splitText = (element, preserveChars = []) => {
    const text = element.textContent;
    element.textContent = '';
    element.style.display = 'flex'; // Make the element itself flex
    element.style.alignItems = 'center'; // Center align the characters
    
    let chars = [];
    let currentIndex = 0;
    
    while (currentIndex < text.length) {
      const char = text[currentIndex];
      const span = document.createElement('span');
      
      // Check if current character is part of preserved sequence
      let preservedChar = preserveChars.find(pc => text.substring(currentIndex).startsWith(pc));
      
      if (preservedChar) {
        span.textContent = preservedChar;
        currentIndex += preservedChar.length;
      } else {
        span.textContent = char;
        currentIndex++;
      }
      
      element.appendChild(span);
      chars.push(span);
    }
    
    return chars;
  };

  // Get title elements
  const titleOne = document.querySelector('.cta__title_one');
  const rightArrow = document.querySelector('.cta__right_arrow');
  const secondTitle = document.querySelector('.cta__second_title');
  const thirdTitle = document.querySelector('.cta__third_title');
  const email = document.querySelector('.cta__last_email');

  // Split text for each element, preserving "'s" in LET'S
  const titleOneChars = splitText(titleOne, ["'s"]);
  const secondTitleChars = splitText(secondTitle);
  const thirdTitleChars = splitText(thirdTitle);
  const emailChars = splitText(email);

  // Create timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta",
      start: "top center",
      toggleActions: "play none none none"
    }
  });

  // Initial states
  gsap.set([titleOneChars, secondTitleChars, thirdTitleChars, emailChars], {
    opacity: 0,
    y: 50
  });

  gsap.set('.cta__right_arrow', {
    opacity: 0,
    x: -50
  });

  gsap.set('.rotating-badge', {
    opacity: 0,
    scale: 0.5
  });

  // Animate elements
  tl.to(titleOneChars, {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: "back.out(1.7)"
  })
  .to('.cta__right_arrow', {
    duration: 0.6,
    opacity: 1,
    x: 0,
    ease: "power2.out"
  }, "-=0.4")
  .to(secondTitleChars, {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: "back.out(1.7)"
  }, "-=0.3")
  .to(thirdTitleChars, {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: "back.out(1.7)"
  }, "-=0.5")
  .to(emailChars, {
    duration: 0.6,
    opacity: 1,
    y: 0,
    stagger: 0.03,
    ease: "power2.out"
  }, "-=0.3")
  .to('.rotating-badge', {
    duration: 1,
    opacity: 1,
    scale: 1,
    ease: "elastic.out(1, 0.3)"
  }, "-=0.5");

  // Add rotation animation to the badge
  gsap.to('.rotating-badge', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none"
  });
});

//footer animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.from(".footer__grid > div", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
    toggleActions: "play none none none",
  },
});

gsap.from(".footer__social a", {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer__social",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

// Initialize variables
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  const fullscreenMenu = document.querySelector('.fullscreen-menu');
  const menuLinks = document.querySelectorAll('.fullscreen-menu__link');
  const bagButton = document.querySelector('.bag-button');
  
  let menuTimeline = gsap.timeline({ paused: true });
  
  // Build the animation timeline
  menuTimeline
    // Set initial visibility
    .to(fullscreenMenu, {
      visibility: 'visible',
      duration: 0
    })
    // Slide in menu from left
    .to(fullscreenMenu, {
      x: '0%',
      duration: 0.6,
      ease: 'power2.inOut'
    })
    // Hide menu toggle and bag button
    .to([menuToggle, bagButton], {
      opacity: 0,
      visibility: 'hidden',
      duration: 0.3
    }, "<") // Start at same time as menu appears
    // Show close button
    .to(menuClose, {
      visibility: 'visible',
      opacity: 1,
      duration: 0.3
    })
    // Slide in menu links from left
    .to(menuLinks, {
      x: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out'
    });
  
  // Open menu function
  const openMenu = () => {
    menuTimeline.play();
    document.body.style.overflow = 'hidden';
  };
  
  // Close menu function
  const closeMenu = () => {
    menuTimeline.reverse();
    document.body.style.overflow = '';
  };
  
  // Event listeners
  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  
  // Close menu when clicking links
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

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
