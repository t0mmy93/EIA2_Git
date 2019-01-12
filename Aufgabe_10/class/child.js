var L10_Animation;
(function (L10_Animation) {
    class Childs {
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "#000000";
            L10_Animation.crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
            L10_Animation.crc2.fill();
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "#000000";
            L10_Animation.crc2.arc(this.x - 7, this.y - 50, 6, 0, 2 * Math.PI);
            L10_Animation.crc2.fill();
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "#000000";
            L10_Animation.crc2.arc(this.x - 7, this.y - 40, 15, 0, 2 * Math.PI);
            //   crc2.fill();
            L10_Animation.crc2.stroke();
            // crc2.isPointInPath()
            // ski
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.moveTo(this.x - 20, this.y - 30);
            L10_Animation.crc2.lineTo(this.x + 10, this.y - 20);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fillStyle = "#000000";
            L10_Animation.crc2.strokeStyle = "#000000";
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
        //        drawBlood(): void {
        //            crc2.beginPath();
        //            crc2.fillStyle = "#FF0000";
        //            crc2.fillRect(this.x - 9, this.y - 50, 2, 25);
        //            crc2.fill();
        //            crc2.beginPath();
        //            crc2.fillStyle = "#FF0000";
        //           
        //
        //            crc2.closePath();
        //            crc2.fillStyle = "#FF0000";
        //            crc2.strokeStyle = "#FF0000";
        //            crc2.stroke();
        //            crc2.fill();
        //
        //        }
        move() {
            if (this.y > 460) {
                this.y = 150;
                this.x = 0;
            }
            this.x += 6;
            this.y += 2;
            this.draw();
            //            if (crc2.isPointInPath(Trees., Trees.This.y)){
            //                  //            }
        }
    }
    L10_Animation.Childs = Childs;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=child.js.map