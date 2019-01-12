var L10_Animation;
(function (L10_Animation) {
    class Trees {
        constructor() {
            this.colorLeaves = "#32CD32";
            this.colorTrunk = "#886A08";
        }
        draw() {
            //            this.x += 40 + Math.random() * 200;
            //            this.y += 50 + Math.random() * 150;
            L10_Animation.crc2.fillStyle = this.colorTrunk;
            L10_Animation.crc2.fillRect(this.x - 8, this.y + 60, 12, 15);
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.lineTo(this.x + 20, this.y + 60);
            L10_Animation.crc2.lineTo(this.x - 20, this.y + 60);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fillStyle = this.colorLeaves;
            L10_Animation.crc2.fill();
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "#000000";
            L10_Animation.crc2.arc(this.x - 2, this.y + 60, 15, 0, 2 * Math.PI);
            //   crc2.fill();
            L10_Animation.crc2.stroke();
        }
    }
    L10_Animation.Trees = Trees;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=trees.js.map