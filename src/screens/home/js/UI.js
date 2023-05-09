
export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Helvetica";
    }
    update() {

    }

    draw(context) {
        context.save();
        // context.shadowOffsetX = 2;
        // context.shadowOffsetY = 2;
        // context.shadowColor = "white";
        // context.shadowBlur = 0;
        context.font = this.fontSize + "px " + this.fontFamily;
        context.textAlign = "center";
        context.fillStyle = this.game.fontColor;
        context.fillText((this.game.time * 0.001).toFixed(2) + " x", this.game.width / 2, this.game.height / 2 - 50)

        if (this.game.gameOver) {
            var fiveMinutes = 5;
            startTimer(fiveMinutes, context,this.game, this.fontSize, this.fontFamily);
        }
        context.clean();
    }
}

function startTimer(duration, context, game, fontSize, fontFamily) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        context.save();
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        context.textAlign = "center";
        context.fillStyle = game.fontColor;
        context.font = fontSize * 1.5 + "px " + fontFamily;
        context.fillText("New game start in " + seconds, game.width / 2, game.height / 2)

        if (--timer < 0) {
            timer = duration;
        }
        context.clean();
    }, 1000);
}