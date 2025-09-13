for (let i = 0; i < 30; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${Math.random() * 100}%`;
  p.style.width = `${Math.random() * 3 + 1}px`;
  p.style.height = p.style.width;
  p.style.animationDuration = `${Math.random() * 5 + 5}s`;
  document.currentScript.parentElement.appendChild(p);
}
