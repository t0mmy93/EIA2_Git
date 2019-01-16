var L10_Animation;
(function (L10_Animation) {
    class Snowflakes {
        move() {
            this.y += this.dy;
            if (this.y > L10_Animation.crc2.canvas.height + 4) {
                this.y = -4;
            }
        }
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.arc(this.x, this.y, 4, 0, 4 * Math.PI);
            L10_Animation.crc2.fillStyle = "#FFFFFF";
            L10_Animation.crc2.fill();
            L10_Animation.crc2.lineWidth = .3;
            L10_Animation.crc2.strokeStyle = "#707070";
            L10_Animation.crc2.stroke();
        }
    }
    L10_Animation.Snowflakes = Snowflakes;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=snowFlake.js.map