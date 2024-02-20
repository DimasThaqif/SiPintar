const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.logo', {
    delay: 350,
    origin: 'top'
})

sr.reveal('.hero-text', {
    delay: 200,
    origin: 'top'
});

sr.reveal('.hero-img', {
    delay: 450,
    origin: 'top'
});

sr.reveal('.icons', {
    delay: 500,
    origin: 'left'
});

sr.reveal('.scroll-down', {
    delay: 500,
    origin: 'right'
});