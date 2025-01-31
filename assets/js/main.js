

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
const navToggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu__links li a");
let isOpen = false;

// Create timeline
const tl = gsap.timeline({ paused: true });

// Build the animation sequence
tl.to(navMenu, {
  visibility: "visible",
  duration: 0,
})
  .fromTo(
    navMenu,
    {
      clipPath: "circle(0% at 100% 0)",
    },
    {
      clipPath: "circle(150% at 100% 0)",
      duration: 1,
      ease: Power2.easeInOut,
    }
  )
  .to(
    ".nav-menu__content",
    {
      opacity: 1,
      duration: 0.8,
      ease: Power2.easeOut,
    },
    "-=0.5"
  )
  .to(
    navLinks,
    {
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: Power2.easeOut,
    },
    "-=0.5"
  );

// Add click event handler
navToggle.addEventListener("click", () => {
  if (!isOpen) {
    // Open menu
    tl.play();
    navToggle.classList.add("active");
  } else {
    // Close menu
    tl.reverse();
    navToggle.classList.remove("active");
  }
  isOpen = !isOpen;
});
// Close menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tl.reverse();
    navToggle.classList.remove("active");
    isOpen = false;
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
