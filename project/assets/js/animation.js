const heroKeyframes = [
    { opacity: 0 },
    { opacity: 1 },
];

const heroTiming = {
    duration: 3000,
}

document.querySelector('hero-section').animate(heroKeyframes, heroTiming);
