namespace L10_Animation {
    export class Childs {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;



        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x - 7, this.y - 50, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y - 30);
            crc2.lineTo(this.x + 10, this.y - 20);

            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();
        }
        move(): void {

            if (this.y > 460) {
                this.y = 150;
                this.x = 0;
            }

            this.x += 6;
            this.y += 2;
            this.draw();
        }
    }
}