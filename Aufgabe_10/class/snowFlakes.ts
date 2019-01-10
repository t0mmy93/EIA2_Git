namespace L10_Animation {
    export class Snowflakes {
        x: number;
        y: number;
        dy: number;
        color: string;

        move(): void {
            this.y += this.dy;
            if (this.y > crc2.canvas.height + 4) {
                this.y = -4;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 4 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.lineWidth = .3;
            crc2.strokeStyle = "#707070";
            crc2.stroke();
        }
    }
}