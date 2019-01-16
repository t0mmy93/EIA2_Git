namespace L10_Animation {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    //    let c = document.getElementById("Canvas");

    let fps: number = 25;
    let snowflakes: Snowflakes[] = [];
    export let trees: Trees[] = [];
    let childDown: ChildDown[] = [];
    let childUp: ChildUp[] = [];
    let imgData: ImageData;


    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //   console.log(crc2);


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

        //        function hitbox(_x: number, _y: number, _radius: number, _color: string) {
        //            this.x = _x;
        //            this.y = _y;
        //            this.radius = _radius;
        //       s._c       //        }



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
            //       console.log(child.x + "    "  + child.y);

            //  console.log(child.x + "c.x  " + child.y + "c.y  ");

//            let childVektor: number = (child.x * child.x + child.y * child.y);
//            let treeVektor: number = (tree.x * tree.x + tree.y * tree.y);
//            let vektor: number = childVektor - treeVektor;
//            console.log();
//            console.log(childVektor + "child  " + treeVektor + " tree ");
//            if (vektor < 500 && vektor > -500) {
//                console.log("Vektor hit");
//                child.drawBlood();
//            }



            //            if (crc2.isPointInPath(child.x + child.y, tree.x + tree.y)) {
            //                console.log("COllsion");
            //                //                // alert("Collision");
            //                //                //      child.drawBloo      
            //                //
            //            }

            //            if (child.x == tree.x && child.y == tree.y) {
            //                            console.log("Collision");
            //                           // child.drawBlood();
            //                        }
            child.draw();
            child.move();
        }
        for (let i: number = 0; i < 5; i++) {
        //    let tree: Trees = trees[i];
            let child: ChildUp = childUp[i];
            //       console.log(child.x + "    "  + child.y);

            //  console.log(child.x + "c.x  " + child.y + "c.y  ");

//            let childVektor: number = (child.x * child.x + child.y * child.y);
//            let treeVektor: number = (tree.x * tree.x + tree.y * tree.y);
//            let vektor: number = childVektor - treeVektor;
//            console.log();
//            console.log(childVektor + "child  " + treeVektor + " tree ");
//            if (vektor < 500 && vektor > -500) {
//                console.log("Vektor hit");
//                child.drawBlood();
//            }

            //            if (crc2.isPointInPath(child.x + child.y, tree.x + tree.y)) {
            //                console.log("COllsion");
            //                //                // alert("Collision");
            //                //                //      child.drawBloo      
            //                //
            //            }

            //            if (child.x == tree.x && child.y == tree.y) {
            //                            console.log("Collision");
            //                           // child.drawBlood();
            //                        }
            child.draw();
            child.move();
        }






        //  console.log("Update");
    }
}