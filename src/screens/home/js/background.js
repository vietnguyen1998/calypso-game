class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }

    update() {
        if (this.x < -this.width) {
            this.x = 0;
        }
        else this.x -= this.game.speed * this.speedModifier;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

class Layer2 {
    constructor(game, width, height, x, y, speedModifier, image) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = x;
        this.y = y;
        this.savePositionX = x;
        this.savePositionY = y;
    }

    update() {
        console.log(this.x, this.y)
        if (this.x < -this.width + 65) {
            this.x = (96 * 11) + 60;
            this.y = this.game.height - 548.5 - 30;
        }
        else {
            this.x -= 2;
            this.y += 1;
        }
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        // context.drawImage(this.image, this.x + this.game.width, this.y - this.game.height, this.width, this.height);
    }
}

export class Background {
    constructor(game) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        // this.layer1image = document.getElementById("layer1");
        // this.layer2image = document.getElementById("layer2");
        // this.layer3image = document.getElementById("layer3");
        this.layer4image = document.getElementById("layer4");
        this.layer5image = document.getElementById("layer5");
        // this.layer1 = new Layer(this.game, this.width, this.height, 1, this.layer1image);
        // this.layer2 = new Layer(this.game, this.width, this.height, 1, this.layer2image);
        // this.layer3 = new Layer(this.game, this.width, this.height, 1, this.layer3image);
        this.layer4 = new Layer(this.game, this.width, this.height, 1, this.layer4image);
        this.layer5 = new Layer2(this.game, 96, 648, 96 * 0, this.height - 15, 1, this.layer5image);
        this.layer6 = new Layer2(this.game, 96, 648, 96 * 1, this.height - 63.5, 1, this.layer5image);
        this.layer7 = new Layer2(this.game, 96, 648, 96 * 2, this.height - 112, 1, this.layer5image);
        this.layer8 = new Layer2(this.game, 96, 648, 96 * 3, this.height - 160.5, 1, this.layer5image);
        this.layer9 = new Layer2(this.game, 96, 648, 96 * 4, this.height - 209, 1, this.layer5image);
        this.layer10 = new Layer2(this.game, 96, 648, 96 * 5, this.height - 257.5, 1, this.layer5image);
        this.layer11 = new Layer2(this.game, 96, 648, 96 * 6, this.height - 306, 1, this.layer5image);
        this.layer12 = new Layer2(this.game, 96, 648, 96 * 7, this.height - 354.5, 1, this.layer5image);
        this.layer13 = new Layer2(this.game, 96, 648, 96 * 8, this.height - 403, 1, this.layer5image);
        this.layer14 = new Layer2(this.game, 96, 648, 96 * 9, this.height - 451.5, 1, this.layer5image);
        this.layer15 = new Layer2(this.game, 96, 648, 96 * 10, this.height - 500, 1, this.layer5image);
        this.layer16 = new Layer2(this.game, 96, 648, 96 * 11, this.height - 548.5, 1, this.layer5image);
        this.backgroundLayers = [this.layer4, this.layer5, this.layer6, this.layer7, this.layer8, this.layer9,this.layer10, this.layer11, this.layer12, this.layer13, this.layer14, this.layer15, this.layer16];
    }
    update() {
        this.backgroundLayers.forEach(layer => {
            layer.update();
        })
    }

    draw(context) {
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        })
    }
}