const canvas = document.getElementById("pong");

const ctx = canvas.getContext("2d")

const user = {
    x: 0,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "white",
    score: 0
}

const com = {
    x: canvas.width - 10,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "white",
    score: 0
}

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
    // create board
    drawRect(0, 0, 600, 400, "black")
    drawRect(0, 100, 100, 100, "red")
    drawRect(rectX, 1)
    rectX = rectX + 100;
    // create user paddle
    drawRect(user.x, user.y, user.width, user.height, user.color);
    // create computer paddle
    drawRect(com.x, com.y, com.width, com.height, com.color);
}

setInterval(render, 1000);