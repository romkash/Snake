const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function score(cactusLeft) {
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game over");
    } else {
        sccore += 100;
        updateScore(score);
    }
}

function updateScore(sccore) {
    sccore += 100;
    document.getElementById("score").textContent = "Score: " + score;
}

function jump() {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 300);
}

function checkCollision() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game over");
    }
}

let isAlive = setInterval(checkCollision, 10);