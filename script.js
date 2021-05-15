const canvas = document.getElementById("pong");

const ctx = canvas.getContext("2d")

// game objects
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

const net = {
    x : (canvas.width - 2)/2,
    y : 0,
    height : 10,
    width : 2,
    color : "white"
}

const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    velocityX: 5,
    velocityY: 5,
    speed: 7,
    color: "white"
}

// GAME FUNCTIONS

// draw a rectangle - used to draw paddles
const drawRect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

// draw text
const drawText = (text, x, y, color) => {
    ctx.fillStyle = color;
    ctx.font = "75px fantasy"
    ctx.fillText(text, x, y)
}

// draw circle - used to create the ball
const drawCircle = (x, y, r, color) => {
    ctx.fillStyle = color;
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI*2, true)
    ctx.closePath()
    ctx.fill()
}

// draw net
const drawNet = () => {
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// function to detect collision
const collision = (b,p) => {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}


let rectX = 0;

const render = () => {
    // create board
    drawRect(0, 0, canvas.width, canvas.height, "black")

    // user score to the left
    drawText(user.score, canvas.width/4, canvas.height/5)

    // computer score to the right
    drawText(com.score, 3*canvas.width/4, canvas.height/5)

    // create net
    drawNet()

    // create ball
    drawCircle(ball.x, ball.y, ball.radius, ball.color)

    // create user paddle
    drawRect(user.x, user.y, user.width, user.height, user.color);

    // create computer paddle
    drawRect(com.x, com.y, com.width, com.height, com.color);
}

const game = () => {
    render()
}

const framePerSecond = 50;

// run game function 50 times every 1 second
setInterval(game, 1000/framePerSecond);