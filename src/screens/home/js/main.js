import { Player } from "./player";
import { InputHandler } from "./input";
import { Background } from "./background";
window.addEventListener("load", function () {
    const canvas = this.document.getElementById("canvas1");
    const game_zone = this.document.getElementById("game_zone");
    const ctx = canvas.getContext("2d");
    canvas.width = game_zone.clientWidth;
    canvas.height = 500;
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 85;
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.background = new Background(this);
            this.speed = 3;
        }

        update() {
            this.background.update();
            this.player.update(this.input.keys);
        }

        draw(context) {
            this.background.draw(context);
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();
})