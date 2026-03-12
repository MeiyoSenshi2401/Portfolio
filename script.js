/* ==========================
   FADE IN ON SCROLL
========================== */

const elements = document.querySelectorAll(".project-card, .skill-group, .about");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    elements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });
}

/* initial styles */
elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);


/* ==========================
   BUTTON HOVER GLOW
========================== */

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.boxShadow = "0 0 15px rgba(122,107,255,0.7)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.boxShadow = "none";
    });

});