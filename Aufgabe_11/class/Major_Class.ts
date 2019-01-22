namespace Aufgabe_11 {


    export class Core {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
    }

    export class Movement extends Core {
        dx: number;
        dy: number;
        move(): void {
            this.y += this.dy;
            this.x += this.dx;
        }
    }

    export class Tree extends Core {
        x: number;
        y: number;
        arcTree: number;

        colorLeaves: string = "#32CD32";
        colorTrunk: string = "#886A08";

        draw(): void {

            crc2.fillStyle = this.colorTrunk;
            crc2.fillRect(this.x - 8, this.y + 60, 12, 15);
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 20, this.y + 60);
            crc2.lineTo(this.x - 20, this.y + 60);
            crc2.closePath();
            crc2.fillStyle = this.colorLeaves;
            crc2.fill();
        }
    }

    export class Snowflake extends Movement {
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
            crc2.arc(this.x, this.y, 4, 0, 4 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.lineWidth = .3;
            crc2.strokeStyle = "#707070";
            crc2.stroke();
        }
    }

    //    export class ChildUp extends Movement {
    //        x: number;
    //        y: number;
    //        dx: number;
    //        dy: number;
    //        arcChild: number;
    //        color: string;
    //
    //
    //
    //        draw(): void {
    //
    //            crc2.beginPath();
    //            crc2.fillStyle = "#000000";
    //            crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
    //            crc2.fill();
    //            crc2.beginPath();
    //            crc2.fillStyle = "#000000";
    //            crc2.arc(this.x - 7, this.y - 50, 6, 0, 2 * Math.PI);
    //            crc2.fill();
    //
    //
    //            // ski
    //            crc2.beginPath();
    //            crc2.moveTo(this.x - 20, this.y - 30);
    //            crc2.lineTo(this.x + 10, this.y - 20);
    //            crc2.closePath();
    //            crc2.fillStyle = "#000000";
    //            crc2.strokeStyle = "#000000";
    //            crc2.stroke();
    //            crc2.fill();
    //
    //        }
    //
    //
    //
    //        move(): void {
    //
    //            if (this.x < 0) {
    //                this.y = 700;
    //                this.x = 700;
    //                this.y = 400 + (Math.random() * 100);
    //            }
    //
    //            this.x -= 3;
    //            this.y -= 1;
    //
    //        }
    //    }
    //
    //
    //    export class ChildDown extends Movement {
    //        x: number;
    //        y: number;
    //        dx: number;
    //        dy: number;
    //        arcChild: number;
    //        color: string;
    //
    //
    //
    //        drawChildDown(): void {
    //
    //            crc2.beginPath();
    //            crc2.fillStyle = "#000000";
    //            crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
    //            crc2.fill();
    //            crc2.beginPath();
    //            crc2.fillStyle = "#000000";
    //            crc2.arc(this.x - 7, this.y - 50, 6, 0, 2 * Math.PI);
    //            crc2.fill();
    //
    //
    //            // ski
    //            crc2.beginPath();
    //            crc2.moveTo(this.x - 20, this.y - 30);
    //            crc2.lineTo(this.x + 10, this.y - 20);
    //            crc2.closePath();
    //            crc2.fillStyle = "#000000";
    //            crc2.strokeStyle = "#000000";
    //            crc2.stroke();
    //            crc2.fill();
    //
    //        }
    //
    //
    //        move(): void {
    //
    //            if (this.y > 460) {
    //                this.y = 150;
    //                this.x = 0;
    //                this.y = 200 + (Math.random() * 100);
    //            }
    //
    //            this.x += 6;
    //            this.y += 2;
    //
    //        }
    //    }

    export class Child extends Movement {
        state: string;
        draw(): void {
            if (this.state == "ride") {
                this.drawChildDown();
            }
            if (this.state == "pull") {
                this.drawChildUp();
            }
        }




        drawChildDown(): void {

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x - 7, this.y - 50, 6, 0, 2 * Math.PI);
            crc2.fill();


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

        drawChildUp(): void {

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x - 7, this.y - 50, 6, 0, 2 * Math.PI);
            crc2.fill();


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

        move(): void {

            if (this.y > 460) {
                this.y = 150;
                this.x = 0;
                this.y = 200 + (Math.random() * 100);
                this.state = "ride";
            }

            else if (this.x > crc2.canvas.width) {
                this.x -= this.dx;
                this.y -= this.dy;
                this.state = "pullup";

            }
else {
                this.x += 6;
                this.y += 2;
            }
        }


    }

}
