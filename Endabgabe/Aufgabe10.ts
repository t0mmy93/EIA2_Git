namespace L10_Animation {
    window.addEventListener("load", init);
    window.addEventListener("click", mousePosition);
    export let crc2: CanvasRenderingContext2D;



    let fps: number = 25;
    let snowBall: SnowBall[] = [];
    let snowflakes: Snowflakes[] = [];
    export let trees: Trees[] = [];
    let childDown: ChildDown[] = [];
    let childUp: ChildUp[] = [];
    let imgData: ImageData;


    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawSky();
        drawCloud();
        drawSun();
        drawSlope();


        imgData = crc2.getImageData(0, 0, 840, 360);




        for (let i: number = 0; i < 100; i++) {
            let snowFlake: Snowflakes = new Snowflakes();
            snowFlake.x = Math.random() * crc2.canvas.width;
            snowFlake.y = Math.random() * crc2.canvas.height;

            snowFlake.dy = Math.random() * 2 + 4;
            //            snowFlake.color = "#00ff00";

            snowflakes.push(snowFlake);
        }

        for (let i: number = 0; i < 10; i++) {
            let tree: Trees = new Trees();
            tree.x = 15 + Math.random() * (crc2.canvas.width - 520);
            tree.y = 170 + Math.random() * (crc2.canvas.height - 250);

            trees.push(tree);
        }

        for (let i: number = 0; i < 5; i++) {
            let child: ChildDown = new ChildDown();
            child.x = 40;
            child.y = 130 * (Math.random() + 100);

            child.dx = /*Math.random() * */ + 4;
            child.dy = /*Math.random()* */ + 4;
        }

        for (let i: number = 0; i < 160; i++) {
            let child: ChildDown = new ChildDown();

            child.x = 15 + Math.random() * (crc2.canvas.width - 700);
            child.y = 200 + Math.random() * (crc2.canvas.height - 300);



            childDown.push(child);
        }

        for (let i: number = 0; i < 5; i++) {
            let child: ChildUp = new ChildUp();
            child.x = 40;
            child.y = 130 * (Math.random() + 100);

            child.dx = /*Math.random() * */ + 4;
            child.dy = /*Math.random()* */ + 4;
        }

        for (let i: number = 0; i < 160; i++) {
            let child: ChildUp = new ChildUp();

            child.x = 15 + Math.random() * (crc2.canvas.width - 700);
            child.y = 200 + Math.random() * (crc2.canvas.height - 300);



            childUp.push(child);
        }
        for (let i: number = 0; i < 5; i++) {
            let snowball: SnowBall = new SnowBall();
            snowball.x = 50;
            snowball.y = 50;

            snowBall.push(snowball);
        }
        update();
    }


    function drawSky(): void {
        crc2.fillStyle = "#63B8ff";
        crc2.fillRect(0, 0, 840, 360);
        crc2.fill();
    }


    function drawSlope(): void {

        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(700, 360);
        crc2.lineTo(700, 700);
        crc2.lineTo(0, 700);
        crc2.lineTo(0, 300);
        crc2.closePath();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function drawSun(): void {
        crc2.beginPath();
        crc2.arc(780, 60, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFD700";
        crc2.fill();
    }

    function drawCloud(): void {

        crc2.beginPath();
        crc2.arc(470, 80, 65, 0, 2 * Math.PI);
        crc2.arc(540, 80, 55, 0, 2 * Math.PI);
        crc2.arc(580, 80, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function mousePosition(_event: MouseEvent): void {
        let y: number = _event.y;
        let x: number = _event.x;

        console.log("X: " + x + " Y: " + y);

        throwSnowball(x, y);
    }
    function throwSnowball(_x: number, _y: number): void {
        //        window.setTimeout(throwSnowball, 200 / fps);


        for (let i: number = 0; i < 5; i++) {
            let snowball: SnowBall = snowBall[i];
            snowball.draw();

        }
    }


    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);



        for (let i: number = 0; i < 70; i++) {
            let snowflake: Snowflakes = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }

        for (let i: number = 0; i < 10; i++) {
            let tree: Trees = trees[i];
            tree.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            // let tree: Trees = trees[i];
            let child: ChildDown = childDown[i];
            child.move();
            child.draw();
        }

        for (let i: number = 0; i < 5; i++) {

            let child: ChildUp = childUp[i];

            child.move();
            child.draw();
        }
    }
}
