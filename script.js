// ===============================
// Suhel Portfolio - script.js
// ===============================

// Typing Animation
const words = [
  "Software Developer",
  "Full Stack Developer",
  "Hardware & Networking",
  "Open Source Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {
  if (!typing) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 30) {
    nav.style.background = "rgba(0,0,0,.85)";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
  } else {
    nav.style.background = "rgba(0,0,0,.5)";
    nav.style.boxShadow = "none";
  }
});

// Fade-in Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all .8s ease";
  observer.observe(section);
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Footer Year
const footer = document.querySelector("footer");
if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} Suhel Ansari • Made with ❤️`;
}

console.log("Suhel Portfolio Loaded Successfully 🚀");
