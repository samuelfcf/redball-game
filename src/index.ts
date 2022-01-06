import Game from "./Game";

const canvas: HTMLCanvasElement = document.querySelector('#canvas');

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const game = new Game(screenWidth, screenHeight, canvas, window);

canvas.addEventListener('mousemove', (event) => {
    game.moveMouse(event)
})
game.start();
