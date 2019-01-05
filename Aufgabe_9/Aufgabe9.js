var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", init);
    let kannWas;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        kannWas = canvas.getContext("2d");
        drawSky();
        drawSlope();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawKids();
        drawSled();
        // trees
        for (let i = 0; i < 5; i++) {
            let x = 20 + Math.random() * 250;
            let y = 400 + Math.random() * 200;
            drawTrees(x, y, "#32CD32");
        }
        for (let i = 0; i < 5; i++) {
            let x = 40 + Math.random() * 200;
            let y = 450 + Math.random() * 150;
            drawTrees(x, y, "#008B45");
        }
        //Snowflakes
        for (let i = 0; i <= 300; i++) {
            let x = Math.random() * 700;
            let y = Math.random() * 700;
            drawSnow(x, y);
        }
    }
    function drawTrees(_x, _y, _color) {
        kannWas.fillStyle = "#886A08";
        kannWas.fillRect(_x - 8, _y + 60, 12, 15);
        kannWas.beginPath();
        kannWas.moveTo(_x, _y);
        kannWas.lineTo(_x + 20, _y + 60);
        kannWas.lineTo(_x - 20, _y + 60);
        kannWas.closePath();
        kannWas.fillStyle = _color;
        kannWas.fill();
    }
    function drawSnow(_x, _y) {
        kannWas.beginPath();
        kannWas.arc(_x, _y, 3, 0, 4 * Math.PI);
        kannWas.fillStyle = "#FFFFFF";
        kannWas.fill();
        kannWas.lineWidth = .3;
        kannWas.strokeStyle = "#707070";
        kannWas.stroke();
    }
    //sky
    function drawSky() {
        kannWas.fillStyle = "#63B8ff    ";
        kannWas.fillRect(0, 0, 700, 700);
        kannWas.fill();
    }
    // slope
    function drawSlope() {
        kannWas.beginPath();
        kannWas.moveTo(50, 300);
        kannWas.lineTo(700, 600);
        kannWas.lineTo(700, 700);
        kannWas.lineTo(0, 700);
        kannWas.lineTo(0, 300);
        kannWas.closePath();
        kannWas.fillStyle = "#FFFFFF";
        kannWas.fill();
    }
    // sun
    function drawSun() {
        kannWas.beginPath();
        kannWas.arc(645, 54, 50, 0, 2 * Math.PI);
        kannWas.fillStyle = "#FFD700";
        kannWas.fill();
    }
    // cloud
    function drawCloud1() {
        kannWas.beginPath();
        kannWas.arc(170, 120, 65, 0, 2 * Math.PI);
        kannWas.arc(240, 120, 55, 0, 2 * Math.PI);
        kannWas.arc(280, 120, 60, 0, 2 * Math.PI);
        kannWas.fillStyle = "#FFFFFF";
        kannWas.fill();
    }
    function drawCloud2() {
        kannWas.beginPath();
        kannWas.arc(350, 50, 65, 0, 2 * Math.PI);
        kannWas.arc(420, 50, 45, 0, 2 * Math.PI);
        kannWas.fillStyle = "#FFFFFF";
        kannWas.fill();
    }
    // kids
    function drawKids() {
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.fillRect(409, 650, 2, 25);
        kannWas.fill();
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.arc(410, 645, 6, 0, 2 * Math.PI);
        kannWas.fill();
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.fillRect(394, 650, 2, 25);
        kannWas.fill();
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.arc(395, 645, 6, 0, 2 * Math.PI);
        kannWas.fill();
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.fillRect(76, 300, 2, 25);
        kannWas.fill();
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.arc(78, 296, 7, 0, 2 * Math.PI);
        kannWas.fill();
    }
    // Sled
    function drawSled() {
        kannWas.beginPath();
        kannWas.moveTo(65, 315);
        kannWas.lineTo(85, 328);
        kannWas.moveTo(80, 325);
        kannWas.lineTo(80, 340);
        kannWas.moveTo(72, 320);
        kannWas.lineTo(72, 335);
        kannWas.moveTo(65, 330);
        kannWas.lineTo(85, 342);
        kannWas.closePath();
        kannWas.fillStyle = "#000000";
        kannWas.strokeStyle = "#000000";
        kannWas.stroke();
        kannWas.fill();
        kannWas.beginPath();
        kannWas.moveTo(410, 680);
        kannWas.lineTo(430, 680);
        kannWas.moveTo(425, 680);
        kannWas.lineTo(425, 690);
        kannWas.moveTo(415, 680);
        kannWas.lineTo(415, 690);
        kannWas.moveTo(410, 690);
        kannWas.lineTo(430, 690);
        kannWas.closePath();
        kannWas.fillStyle = "#000000";
        kannWas.strokeStyle = "#000000";
        kannWas.stroke();
        kannWas.fill();
    }
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=Aufgabe9.js.map