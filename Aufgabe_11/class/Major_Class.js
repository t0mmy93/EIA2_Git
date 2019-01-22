var Aufgabe_11;
(function (Aufgabe_11) {
    class Core {
        move() { }
        draw() { }
    }
    Aufgabe_11.Core = Core;
    class Movement extends Core {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    Aufgabe_11.Movement = Movement;
    class Tree extends Core {
        constructor(...args) {
            super(...args);
            this.colorLeaves = "#32CD32";
            this.colorTrunk = "#886A08";
        }
        draw() {
            Aufgabe_11.crc2.fillStyle = this.colorTrunk;
            Aufgabe_11.crc2.fillRect(this.x - 8, this.y + 60, 12, 15);
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.moveTo(this.x, this.y);
            Aufgabe_11.crc2.lineTo(this.x + 20, this.y + 60);
            Aufgabe_11.crc2.lineTo(this.x - 20, this.y + 60);
            Aufgabe_11.crc2.closePath();
            Aufgabe_11.crc2.fillStyle = this.colorLeaves;
            Aufgabe_11.crc2.fill();
        }
    }
    Aufgabe_11.Tree = Tree;
    class Snowflake extends Movement {
        move() {
            this.y += this.dy;
            if (this.y > Aufgabe_11.crc2.canvas.height + 4) {
                this.y = -4;
            }
        }
        draw() {
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.arc(this.x, this.y, 4, 0, 4 * Math.PI);
            Aufgabe_11.crc2.fillStyle = "#FFFFFF";
            Aufgabe_11.crc2.fill();
            Aufgabe_11.crc2.lineWidth = .3;
            Aufgabe_11.crc2.strokeStyle = "#707070";
            Aufgabe_11.crc2.stroke();
        }
    }
    Aufgabe_11.Snowflake = Snowflake;
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
    class Child extends Movement {
        draw() {
            if (this.state == "ride") {
                this.drawChildDown();
            }
            if (this.state == "pull") {
                this.drawChildUp();
            }
        }
        drawChildDown() {
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.fillStyle = "#000000";
            Aufgabe_11.crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
            Aufgabe_11.crc2.fill();
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.fillStyle = "#000000";
            Aufgabe_11.crc2.arc(this.x - 7, this.y - 50, 6, 0, 2 * Math.PI);
            Aufgabe_11.crc2.fill();
            // ski
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.moveTo(this.x - 20, this.y - 30);
            Aufgabe_11.crc2.lineTo(this.x + 10, this.y - 20);
            Aufgabe_11.crc2.closePath();
            Aufgabe_11.crc2.fillStyle = "#000000";
            Aufgabe_11.crc2.strokeStyle = "#000000";
            Aufgabe_11.crc2.stroke();
            Aufgabe_11.crc2.fill();
        }
        drawChildUp() {
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.fillStyle = "#000000";
            Aufgabe_11.crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
            Aufgabe_11.crc2.fill();
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.fillStyle = "#000000";
            Aufgabe_11.crc2.arc(this.x - 7, this.y - 50, 6, 0, 2 * Math.PI);
            Aufgabe_11.crc2.fill();
            // ski
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.moveTo(this.x - 20, this.y - 30);
            Aufgabe_11.crc2.lineTo(this.x + 10, this.y - 20);
            Aufgabe_11.crc2.closePath();
            Aufgabe_11.crc2.fillStyle = "#000000";
            Aufgabe_11.crc2.strokeStyle = "#000000";
            Aufgabe_11.crc2.stroke();
            Aufgabe_11.crc2.fill();
        }
        move() {
            if (this.y > 460) {
                this.y = 150;
                this.x = 0;
                this.y = 200 + (Math.random() * 100);
                this.state = "ride";
            }
            else if (this.x > Aufgabe_11.crc2.canvas.width) {
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
    Aufgabe_11.Child = Child;
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=Major_Class.js.map