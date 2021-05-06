const canvas = document.getElementById("pong");

canvas.getContext("2d")

const drawRect = (x, y,w,h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}