// Scroll Animations using GSAP
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero h1", {
        duration: 1.5,
        opacity: 0,
        y: -100,
        ease: "power4.out",
    });

    gsap.from(".about-img", {
        scrollTrigger: {
            trigger: ".about",
            start: "top center",
            scrub: 1,
        },
        duration: 1,
        opacity: 0,
        x: -100,
    });

    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about",
            start: "top center",
            scrub: 1,
        },
        duration: 1,
        opacity: 0,
        x: 100,
    });

    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".grid-cards",
            start: "top 80%",
            scrub: 1,
        },
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        y: 50,
    });
});
