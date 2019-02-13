namespace L10_Animation {
    export class ChildDown {
        x: number;
        y: number;
        dx: number;
        dy: number;
        arcChild: number;
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
//            crc2.beginPath();
//            crc2.fillStyle = "#000000";
//            crc2.arc(this.x - 7, this.y - 40, 15, 0, 2 * Math.PI);
//            //   crc2.fill();
//            crc2.stroke();
//            // crc2.isPointInPath()
            

            // ski
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y - 30);
            crc2.lineTo(this.x + 10, this.y - 20);
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();

        }

                drawBlood(): void {
                    crc2.beginPath();
                    crc2.fillStyle = "red";
                    crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
                    crc2.fill();
                    crc2.beginPath();
                    crc2.fillStyle = "red";
                   
        
                    crc2.closePath();
                    crc2.fillStyle = "red";
                    crc2.strokeStyle = "red";
                    crc2.stroke();
                    crc2.fill();
        
                }

        move(): void {

            if (this.y > 460) {
                this.y = 150;
                this.x = 0;
                this.y = 200 + (Math.random() * 100);
            }

            this.x += 6;
            this.y += 2;
        //    this.draw();

            //            if (crc2.isPointInPath(Trees., Trees.This.y)){
            //                  //            }

        }
    }
}
