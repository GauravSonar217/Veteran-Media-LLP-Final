// Selecting elements
const paragraphs = document.querySelectorAll("p, li, a, h1, h2, h3, h4, h5, h6, b");

// Adding scroll event listener
window.addEventListener("scroll", function() {
  paragraphs.forEach(function(paragraph) {
    const paragraphMiddle = paragraph.offsetTop + 0.5 * paragraph.offsetHeight;
    const windowBottom = window.scrollY + window.innerHeight;

    if (paragraphMiddle < windowBottom) {
      paragraph.classList.add("textFade");
    }
  });
});

// Triggering scroll event
window.scroll();
