const noBtn = document.getElementById("noBtn");
const header = document.querySelector("h1");
const image = document.querySelector("img");
const yesBtn = document.querySelector(".yes");

// helper: checks overlap between two rectangles
function isOverlapping(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

// ✅ YES BUTTON WORKS FIRST CLICK
yesBtn.addEventListener("click", () => {
  header.textContent = "Yay I knew it... you had no choice!!!!";

  image.src = "https://media.tenor.com/zkSMgNfy1VMAAAAM/hug-warm-hug.gif";

  header.classList.add("glow-on-happy");

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
});

// ❗ NO BUTTON RUNNER LOGIC
noBtn.addEventListener("click", () => {
  noBtn.style.position = "fixed";
  noBtn.style.zIndex = 9999;

  let safe = false;
  let x, y;

  const headerRect = header.getBoundingClientRect();
  const imgRect = image.getBoundingClientRect();

  while (!safe) {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    x = Math.random() * maxX;
    y = Math.random() * maxY;

    const btnRect = {
      left: x,
      right: x + noBtn.offsetWidth,
      top: y,
      bottom: y + noBtn.offsetHeight
    };

    if (
      !isOverlapping(btnRect, headerRect) &&
      !isOverlapping(btnRect, imgRect)
    ) {
      safe = true;
    }
  }

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
