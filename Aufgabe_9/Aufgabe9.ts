namespace Aufgabe_9 {
    window.addEventListener("load", init);
    let kannWas: CanvasRenderingContext2D;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        kannWas = canvas.getContext("2d");

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
    
        function drawTrees(_x: number, _y: number, _color: string): void {

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

    function drawSnow(_x: number, _y: number): void {

        kannWas.beginPath();
        kannWas.arc(_x, _y, 3, 0, 4 * Math.PI);
        kannWas.fillStyle = "#FFFFFF";
        kannWas.fill();
        kannWas.lineWidth = .3;
        kannWas.strokeStyle = "#707070";
        kannWas.stroke();


    }
    
    
    //sky
    function drawSky(): void {
        kannWas.fillStyle = "#63B8ff    ";
        kannWas.fillRect(0, 0, 700, 700);
        kannWas.fill();

    }

    // slope
    function drawSlope(): void {

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
    function drawSun(): void {

        kannWas.beginPath();
        kannWas.arc(645, 54, 50, 0, 2 * Math.PI);
        kannWas.fillStyle = "#FFD700";
        kannWas.fill();
    }
    // cloud
    function drawCloud1(): void {

        kannWas.beginPath();
        kannWas.arc(170, 120, 65, 0, 2 * Math.PI);
        kannWas.arc(240, 120, 55, 0, 2 * Math.PI);
        kannWas.arc(280, 120, 60, 0, 2 * Math.PI);
        kannWas.fillStyle = "#FFFFFF";
        kannWas.fill();

    }

    function drawCloud2(): void {

        kannWas.beginPath();
        kannWas.arc(350, 50, 65, 0, 2 * Math.PI);
        kannWas.arc(420, 50, 45, 0, 2 * Math.PI);
        kannWas.fillStyle = "#FFFFFF";
        kannWas.fill();

    }



    // kids
    function drawKids(): void {

        kannWas.beginPath();
        kannWas.fillStyle = "#ffDEAD";
        kannWas.fillRect(406, 650, 5, 25);
        kannWas.fill();
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.arc(410, 645, 6, 0, 2 * Math.PI);
        kannWas.fill();

        kannWas.beginPath();
        kannWas.fillStyle = "#ffb90f";
        kannWas.fillRect(393, 650, 5, 25);
        kannWas.fill();
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.arc(395, 645, 6, 0, 2 * Math.PI);
        kannWas.fill();

        kannWas.beginPath();
        kannWas.fillStyle = "#0000FF";
        kannWas.fillRect(75, 300, 5, 25);
        kannWas.fill();
        kannWas.beginPath();
        kannWas.fillStyle = "#000000";
        kannWas.arc(78, 296, 7, 0, 2 * Math.PI);
        kannWas.fill();
    }

    // Sled
    function drawSled(): void {

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
}