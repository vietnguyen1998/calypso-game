import { Sitting, Running, Falling, Jumping } from "./playerState";

export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 58;
        // this.y = 352.5;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById("player");
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.speed = 0;
        this.maxSpeed = 5;
        this.maxFrame = 0;
        this.states = [new Running(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
    }

    update(input, deltaTime) {
        this.currentState.handleInput(input);
        // this.x++;
        // this.y--;
        this.x += this.speed;
        this.y += -this.speed/2;
        if(this.x < 400){
            this.speed = 0.5 ;
        }else{
            this.speed = 0;
        }
        if (input.includes("ArrowRight")) {
            this.speed = this.maxSpeed;
        }
        else if (input.includes("ArrowLeft")){
            this.speed = -this.maxSpeed;
        }
        // else this.speed = 0;

        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        //vertical move
        // if (input.includes("ArrowUp") && this.onGround()) this.vy -= 30;
        this.y += this.vy;
        // if (!this.onGround()) this.vy += this.weight;
        // else this.vy = 0;

        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }

    onGround() {
        return this.y >= this.game.height - this.height - this.game.groundMargin;
    }

    draw(context) {
        context.fillStyle = "transparent";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}