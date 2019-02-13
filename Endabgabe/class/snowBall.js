var L10_Animation;
(function (L10_Animation) {
    class SnowBall {
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.arc(this.x, this.y, 4, 0, 15 * Math.PI);
            L10_Animation.crc2.fillStyle = "#000000";
            L10_Animation.crc2.fill();
            L10_Animation.crc2.lineWidth = .3;
            L10_Animation.crc2.strokeStyle = "#707070";
            L10_Animation.crc2.stroke();
        }
    }
    L10_Animation.SnowBall = SnowBall;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=snowBall.js.map