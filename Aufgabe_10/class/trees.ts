namespace L10_Animation {
    export class Trees {
        x: number;
        y: number;
        arcTree: number;

        colorLeaves: string = "#32CD32";
        colorTrunk: string = "#886A08";



        draw(): void {

            //            this.x += 40 + Math.random() * 200;
            //            this.y += 50 + Math.random() * 150;

            crc2.fillStyle = this.colorTrunk;
            crc2.fillRect(this.x - 8, this.y + 60, 12, 15);
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 20, this.y + 60);
            crc2.lineTo(this.x - 20, this.y + 60);
            crc2.closePath();
            crc2.fillStyle = this.colorLeaves;
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x - 2, this.y + 60, 15, 0, 2 * Math.PI);
            //   crc2.fill();
            crc2.stroke();
        }
    }
}