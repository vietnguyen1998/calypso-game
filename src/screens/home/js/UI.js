
export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Helvetica";
    }
    update() {

    }

    draw(context) {
        // context.shadowOffsetX = 2;
        // context.shadowOffsetY = 2;
        // context.shadowColor = "white";
        // context.shadowBlur = 0;
        context.save();
        context.font = this.fontSize + "px " + this.fontFamily;
        context.textAlign = "center";
        context.fillStyle = this.game.fontColor;
        context.fillText((this.game.time * 0.001).toFixed(2) + " x", this.game.width / 2, this.game.height / 2 - 50)

        var no = 10;//  w  w w  .  j  av  a  2  s .co  m
        var pointToFill = 4.72;
        var diff;
        function fillCounter(context, game) {
            diff = ((no / 10) * Math.PI * 2 * 10);
            context.clearRect(0, 0, game.width, game.height);
            context.lineWidth = 15;
            context.fillStyle = '#000';
            context.strokeStyle = '#F5E0A9';
            context.textAlign = 'center';
            context.font = "25px monospace";
            context.fillText(no + 'sec', 100, 110);
            context.beginPath();
            context.arc(100, 100, 90, pointToFill, diff / 10 + pointToFill);
            context.stroke();
            if (no == 0) {
                clearTimeout(fill);
                context.fillStyle = '#FFF';
                context.fillRect(0, 0, game.width, game.height);
                context.fillStyle = '#000';
                context.fillText('Times up', 100, 110);
            }
            no--;
        }
        var fill = setInterval(() => fillCounter(context, this.game), 1000);
        context.restore();
    }
}
