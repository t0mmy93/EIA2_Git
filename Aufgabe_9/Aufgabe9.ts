namespace Aufgabe_9 {
    window.addEventListener("load", init);
    let crc: CanvasRenderingContext2D;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        drawSky();
        drawSlope();
        drawSun();
        drawCloud1();
        drawCloud2();
        drawKids();
        drawSled();

        // trees
        for (let i: number = 0; i < 5
            ; i++) {
            let x: number = 20 + Math.random() * 250;
            let y: number = 400 + Math.random() * 200;
            drawTrees(x, y, "#32CD32");
        }
        for (let i: number = 0; i < 5; i++) {
            let x: number = 40 + Math.random() * 200;
            let y: number = 450 + Math.random() * 150;
            drawTrees(x, y, "#008B45");
        }
        //Snowflakes
        for (let i: number = 0; i <= 300; i++) {
            let x: number = Math.random() * 700;
            let y: number = Math.random() * 700;
            drawSnow(x, y);
        }
    }
    //sky
    function drawSky(): void {
        crc.fillStyle = "#63B8ff    ";
        crc.fillRect(0, 0, 700, 700);
        crc.fill();

    }

    // slope
    function drawSlope(): void {

        crc.beginPath();
        crc.moveTo(50, 300);
        crc.lineTo(700, 600);
        crc.lineTo(700, 700);
        crc.lineTo(0, 700);
        crc.lineTo(0, 300);
        crc.closePath();
        crc.fillStyle = "#FFFFFF";
        crc.fill();

    }
    // sun
    function drawSun(): void {

        crc.beginPath();
        crc.arc(645, 54, 50, 0, 2 * Math.PI);
        crc.fillStyle = "#FFD700";
        crc.fill();
    }
    // cloud
    function drawCloud1(): void {

        crc.beginPath();
        crc.arc(170, 120, 65, 0, 2 * Math.PI);
        crc.arc(240, 120, 55, 0, 2 * Math.PI);
        crc.arc(280, 120, 60, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();

    }

    function drawCloud2(): void {

        crc.beginPath();
        crc.arc(350, 50, 65, 0, 2 * Math.PI);
        crc.arc(420, 50, 45, 0, 2 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();

    }

    function drawTrees(_x: number, _y: number, _color: string): void {

        crc.fillStyle = "#886A08";
        crc.fillRect(_x - 8, _y + 60, 12, 15);
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.lineTo(_x + 20, _y + 60);
        crc.lineTo(_x - 20, _y + 60);
        crc.closePath();
        crc.fillStyle = _color;
        crc.fill();

    }

    function drawSnow(_x: number, _y: number): void {

        crc.beginPath();
        crc.arc(_x, _y, 3, 0, 4 * Math.PI);
        crc.fillStyle = "#FFFFFF";
        crc.fill();
        crc.lineWidth = .3;
        crc.strokeStyle = "#707070";
        crc.stroke();


    }

    // kids
    function drawKids(): void {

        crc.beginPath();
        crc.fillStyle = "#ffDEAD";
        crc.fillRect(406, 650, 5, 25);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(410, 645, 6, 0, 2 * Math.PI);
        crc.fill();

        crc.beginPath();
        crc.fillStyle = "#ffb90f";
        crc.fillRect(393, 650, 5, 25);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(395, 645, 6, 0, 2 * Math.PI);
        crc.fill();

        crc.beginPath();
        crc.fillStyle = "#0000FF";
        crc.fillRect(75, 300, 5, 25);
        crc.fill();
        crc.beginPath();
        crc.fillStyle = "#000000";
        crc.arc(78, 296, 7, 0, 2 * Math.PI);
        crc.fill();
    }

    // Sled
    function drawSled(): void {

        crc.beginPath();
        crc.moveTo(65, 315);
        crc.lineTo(85, 328);
        crc.moveTo(80, 325);
        crc.lineTo(80, 340);
        crc.moveTo(72, 320);
        crc.lineTo(72, 335);
        crc.moveTo(65, 330);
        crc.lineTo(85, 342);
        crc.closePath();
        crc.fillStyle = "#000000";
        crc.strokeStyle = "#000000";
        crc.stroke();
        crc.fill();

        crc.beginPath();
        crc.moveTo(410, 680);
        crc.lineTo(430, 680);
        crc.moveTo(425, 680);
        crc.lineTo(425, 690);
        crc.moveTo(415, 680);
        crc.lineTo(415, 690);
        crc.moveTo(410, 690);
        crc.lineTo(430, 690);
        crc.closePath();
        crc.fillStyle = "#000000";
        crc.strokeStyle = "#000000";
        crc.stroke();
        crc.fill();
    }
}