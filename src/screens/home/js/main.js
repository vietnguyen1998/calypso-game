import { Player } from "./player";
import { InputHandler } from "./input";
import { Background } from "./background";
export function eventCanvas(_canvas) {
    const canvas = _canvas;
    const game_zone = document.getElementById("game_zone");
    const ctx = canvas.getContext("2d");
    canvas.width = game_zone.clientWidth;
    canvas.height = 600;
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 80;
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.background = new Background(this);
            this.speed = 3;
        }

        update(deltaTime) {
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
        }

        draw(context) {
            this.background.draw(context);
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
let lastTime =0;
    function animate(timeStamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate(0);
}