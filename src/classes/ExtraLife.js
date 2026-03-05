import { PATH_EXTRA_LIFE_IMAGE } from "../utils/constants.js";

class ExtraLife {
    constructor(canvasWidth) {
        this.width = 32 * 1.2;
        this.height = 32 * 1.2;
        this.velocity = 2;

        this.position = {
            x: Math.random() * (canvasWidth - this.width),
            y: -this.height
        };

        this.image = this.getImage(PATH_EXTRA_LIFE_IMAGE);
        this.active = true;
    }

    getImage(path) {
        const image = new Image();
        image.src = path;
        return image;
    }

    update() {
        this.position.y += this.velocity;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    hit(player) {
        return (
            this.position.x < player.position.x + 20 + player.width - 38 &&
            this.position.x + this.width > player.position.x + 20 &&
            this.position.y < player.position.y + 22 + player.height - 34 &&
            this.position.y + this.height > player.position.y + 22
        );
    }
}

export default ExtraLife;