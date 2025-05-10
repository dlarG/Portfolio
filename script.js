const typingText = document.querySelector(".typing-text");
const words = [
  "Web Development",
  "Clean Code",
  "Responsive Design",
  "User Experience",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);

  typingText.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    // Typing
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    // Deleting
    charIndex--;
    setTimeout(type, 50);
  } else {
    // Change word
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
  }
}

// Start typing animation when page loads
window.addEventListener("DOMContentLoaded", type);

document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navList = document.querySelector(".nav-list");

  mobileMenuBtn.addEventListener("click", function () {
    navList.classList.toggle("active");
    this.innerHTML = navList.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navList.classList.contains("active")) {
        navList.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Navbar scroll effect
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Active link highlighting
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Back to top button
  const backToTopBtn = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
    });
  }

  // Project card hover effect enhancement
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector("img").style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", function () {
      this.querySelector("img").style.transform = "scale(1)";
    });
  });

  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
