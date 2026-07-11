// ==========================
// SUHEL PORTFOLIO - SCRIPT.JS
// ==========================

// Typing Animation
const text = [
  "Full Stack Developer",
  "Software Developer",
  "Hardware & Networking",
  "Always Learning 🚀"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  if (!typing) return;

  const current = text[textIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typing.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      textIndex = (textIndex + 1) % text.length;
      charIndex = 0;
    }
  }

  setTimeout(typeEffect, deleting ? 40 : 90);
}

typeEffect();

// Fade-in animation for links
const links = document.querySelectorAll(".links a");

links.forEach((link, index) => {
  link.style.opacity = "0";
  link.style.transform = "translateY(20px)";

  setTimeout(() => {
    link.style.transition = "all .6s ease";
    link.style.opacity = "1";
    link.style.transform = "translateY(0)";
  }, 250 * (index + 1));
});

// Smooth hover glow
links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.boxShadow = "0 0 30px rgba(76,201,240,.35)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.boxShadow = "";
  });
});

// Current Year in footer (optional)
const footer = document.querySelector("footer");
if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} Suhel Ansari • Made with ❤️`;
}
