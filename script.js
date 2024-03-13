VANTA.RINGS({
  el: "#VANTA",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundAlpha: 0.0,
});

setTimeout(() => {
  const content = document.querySelector(".content");
  content.style.opacity = 1;
  content.style.filter = "blur(0px)";
}, 1000);
