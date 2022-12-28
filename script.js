const playerState = "run";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 512);
const CANVAS_HEIGHT = (canvas.height = 370);

const canvas2 = document.getElementById("canvas2");
const ctxLoad = canvas2.getContext("2d");
const CANVASLOAD_WIDTH = (canvas2.width = 535);
const CANVASLOAD_HEIGHT = (canvas2.height = 100);

const playerImage = new Image();
playerImage.src = "images/snail_frames.png";
const spriteWidth = 512;
const spriteHeight = 370;
let frameX = 0;
let gameFrame = 0;
const staggerFrames = 5;
let x = 0;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    0,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  ctxLoad.fillStyle = "rgb(0, 196, 140)";
  if (x < 535) {
    ctxLoad.fillRect(0, 25, x, 50);
    x += 5;
  } else if (x === 535) {
    x += 1;
    ctxLoad.clearRect(0, 0, CANVASLOAD_WIDTH, CANVASLOAD_HEIGHT);
    const playBtn = document.createElement("button");
    playBtn.textContent = "PLAY";
    playBtn.className = "play_btn";
    document.body.appendChild(playBtn);
  }

  if (gameFrame % staggerFrames === 0) {
    if (frameX < 9) frameX++;
    else frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
