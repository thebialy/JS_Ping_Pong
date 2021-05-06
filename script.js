const canvas = document.getElementById("pong");

const ctx = canvas.getContext("2d")

const drawRect = (x, y,w,h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

const drawText = (text, x, y, color) => {
    ctx.fillStyle = color;
    ctx.font = "75px fantasy"
    ctx.fillText(text, x, y)
}

const drawCircle = (x, y, r, color) => {
    ctx.fillStyle = color;
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI*2, true)
    ctx.closePath()
    ctx.fill()
}

let rectX = 0;

const render = () => {
    drawRect(0, 0, 600, 400, "black")
    drawRect(0, 100, 100, 100, "red")
    drawRect(rectX, 1)
    rectX = rectX + 100;
}

setInterval(render, 1000);