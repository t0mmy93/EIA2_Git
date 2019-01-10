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
            L10_Animation.crc2.moveTo(this.x - 20, this.y - 30);
            L10_Animation.crc2.lineTo(this.x + 10, this.y - 20);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fillStyle = "#000000";
            L10_Animation.crc2.strokeStyle = "#000000";
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
        move() {
            if (this.y > 460) {
                this.y = 150;
                this.x = 0;
            }
            this.x += 6;
            this.y += 2;
            this.draw();
        }
    }
    L10_Animation.Childs = Childs;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=child.js.map