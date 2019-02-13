namespace L10_Animation {
    export class SnowBall {
        x: number;
        y: number;
        dy: number;
        color: string;


      

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 4, 0, 15 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.lineWidth = .3;
            crc2.strokeStyle = "#707070";
            crc2.stroke();
        }
    }
}