export default function confettiInit() {
  var duration = 1 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 10,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 10,
      angle: 120,
      spread: 55,
      origin: { x: 0.75 },
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
