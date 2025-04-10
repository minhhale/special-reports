document.querySelector('.scroll-down-indicator').addEventListener('click', () => {
    document.getElementById('content-section').scrollIntoView({ behavior: 'smooth' });
  });

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const video5 = document.getElementById('video5');
const video6 = document.getElementById('video6');

// Add event listener to the second video
video2.addEventListener('play', () => {
    // Pause the first video when the second one starts playing
    if (!video1.paused) {
        video1.pause();
    }
    if (!video3.paused) {
        video3.pause();
    }
    if (!video4.paused) {
        video4.pause();
    }
    if (!video5.paused) {
        video5.pause();
    }
    if (!video6.paused) {
        video6.pause();
    }
});

// Add event listener to the first video
video1.addEventListener('play', () => {
    // Pause the second video when the first one starts playing
    if (!video2.paused) {
        video2.pause();
    }
    if (!video3.paused) {
        video3.pause();
    }
    if (!video4.paused) {
        video4.pause();
    }
    if (!video5.paused) {
        video5.pause();
    }
    if (!video6.paused) {
        video6.pause();
    }
});

// Add event listener to the 3 video
video3.addEventListener('play', () => {
    // Pause the second video when the first one starts playing
    if (!video2.paused) {
        video2.pause();
    }
    if (!video1.paused) {
        video1.pause();
    }
    if (!video4.paused) {
        video4.pause();
    }
    if (!video5.paused) {
        video5.pause();
    }
    if (!video6.paused) {
        video6.pause();
    }
});

// Add event listener to the 4 video
video4.addEventListener('play', () => {
    // Pause the second video when the first one starts playing
    if (!video2.paused) {
        video2.pause();
    }
    if (!video3.paused) {
        video3.pause();
    }
    if (!video1.paused) {
        video1.pause();
    }
    if (!video5.paused) {
        video5.pause();
    }
    if (!video6.paused) {
        video6.pause();
    }
});

// Add event listener to the 5 video
video5.addEventListener('play', () => {
    // Pause the second video when the first one starts playing
    if (!video2.paused) {
        video2.pause();
    }
    if (!video3.paused) {
        video3.pause();
    }
    if (!video4.paused) {
        video4.pause();
    }
    if (!video1.paused) {
        video1.pause();
    }
    if (!video6.paused) {
        video6.pause();
    }
});

// Add event listener to the 6 video
video6.addEventListener('play', () => {
    // Pause the second video when the first one starts playing
    if (!video2.paused) {
        video2.pause();
    }
    if (!video3.paused) {
        video3.pause();
    }
    if (!video4.paused) {
        video4.pause();
    }
    if (!video1.paused) {
        video1.pause();
    }
    if (!video5.paused) {
        video5.pause();
    }
});