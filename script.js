// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// COUNTDOWN
const target = new Date("July 23, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const m = Math.floor((diff % (1000*60*60)) / (1000*60));
  const s = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${d}д ${h}г ${m}хв ${s}с`;
}, 1000);

// PARALLAX
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  document.getElementById("mountain").style.transform =
    `translateY(${scroll * 0.3}px)`;
});

// SMOKE EFFECT
const canvas = document.getElementById("smoke");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 5; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 10 + 5,
      speedX: (Math.random() - 0.5),
      speedY: (Math.random() - 0.5),
      alpha: 1
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.01;

    ctx.fillStyle = `rgba(0,255,136,${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fill();

    if (p.alpha <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();