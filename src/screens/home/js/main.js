import { Player } from "./player";
import { InputHandler } from "./input";
import { Background } from "./background";
import { UI } from "./UI";
export function eventCanvas(_canvas) {
    const canvas = _canvas;
    const game_zone = document.getElementById("game_zone");
    const ctx = canvas.getContext("2d");
    canvas.width = game_zone.clientWidth;
    canvas.height = game_zone.clientWidth/2;
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 0;
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.background = new Background(this);
            this.UI = new UI(this);
            this.speed = 3;
            this.time = 0;
            this.maxTime = 2000;
            this.gameOver = false;
            this.fontColor = "black";
        }

        update(deltaTime) {
            this.time += deltaTime;
            if(this.time > this.maxTime){
                this.gameOver = true;   
            }
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
        }

        draw(context) {
            this.background.draw(context);
            this.player.draw(context);
            this.UI.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    let lastTime = 0;
    function animate(timeStamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        game.update(deltaTime);
        game.draw(ctx);
        if(!game.gameOver) requestAnimationFrame(animate);
    }

    animate(0);
}