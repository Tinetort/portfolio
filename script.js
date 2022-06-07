const line = gsap.timeline({ repeat: 0, repeatDelay: 1 });

line.to("#webDev", {
  text: `HI! I am Alex, and I'm a Web developer`,
  ease: `power1.in`,
  duration: 2.5,
});
gsap.to(".photo", {
  stagger: {
    each: 1,
    from: "random",
    ease: "power2.inOut",
  },
  opacity: 1,
});

let cx,
  cy,
  mouseX,
  mouseY,
  posX,
  posY,
  clientX,
  clientY,
  dx,
  dy,
  tiltx,
  tilty,
  request,
  radius,
  degree;

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  (cx = window.innerWidth / 2), (cy = window.innerHeight / 2);

  body.addEventListener("mousemove", (e) => {
    (clientX = e.pageX), (clientY = e.pageY);

    request = requestAnimationFrame(callBack);
  });

  function callBack() {
    dx = clientX - cx;
    dy = clientY - cy;
    tiltx = dy / cy;
    tilty = dx / cx;
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = radius * 20;
    gsap.to(".par", 1, {
      transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`,
    });
  }
});

document.addEventListener("mousemove", parallax);

function parallax(e) {
  if (window.innerWidth >= 800) {
    this.querySelectorAll(".photo").forEach((one) => {
      const speed = one.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 50;
      const y = (window.innerHeight - e.pageY * speed) / 50;

      one.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
}




