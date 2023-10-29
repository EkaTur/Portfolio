document.addEventListener("DOMContentLoaded", function () {
    createBlinkingDots(document.querySelector("header"));
    createBlinkingDots(document.querySelector(".aboutMeSection"));
});

function createBlinkingDots(container) {
  const numDots = 900; //
  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div");
    dot.className = "blinking-dot";
    container.appendChild(dot);

    const randomX = Math.random() * container.clientWidth;
    const randomY = Math.random() * container.clientHeight;

    dot.style.left = `${randomX}px`;
    dot.style.top = `${randomY}px`;

    animateDot(dot);
  }
}

function animateDot(dot) {
  const tl = new TimelineMax({ repeat: -1, yoyo: true });
  tl.to(dot, Math.random() * 1 + 0.5, { opacity: 0.3, ease: Power1.easeInOut })
    .to(dot, Math.random() * 1 + 0.5, { opacity: 1, ease: Power1.easeInOut });
}

gsap.from('h1', { y: -50, opacity: 0, delay: 1, duration: 2 })

gsap.from('.menuItem', {y: -100, opacity: 0, delay: 1.5, duration: 2, stagger: 1})

gsap.from('.descriptionPar', {opacity: 0, delay: 1, duration: 3})

gsap.to('.animPar', {
    text: `I'm a web developer.`,
    duration: 3,
    delay: 2
})

let tl = gsap.timeline ()
.to('.icon',{
  x: "random(-20, 20, 5)", 
  y: "random(-20, 10, 3)",
  duration:3,
  ease:"none",
  repeat:-1,
  repeatRefresh:true 
})

gsap.from('.certificatesHeader', { opacity: 0, delay: 2, duration: 2 })

const mockup = document.querySelectorAll('.mockup');

mockup.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('focused');
    });
});

function removeFocus() {
    mockup.forEach(item => {
        item.classList.remove('focused');
    });
}