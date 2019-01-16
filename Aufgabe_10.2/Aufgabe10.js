var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    //    let c = document.getElementById("Canvas");
    let fps = 25;
    let snowflakes = [];
    L10_Animation.trees = [];
    let childDown = [];
    let childUp = [];
    let imgData;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = canvas.getContext("2d");
        //   console.log(crc2);
        drawSky();
        drawCloud();
        drawSun();
        drawSlope();
        imgData = L10_Animation.crc2.getImageData(0, 0, 840, 360);
        for (let i = 0; i < 100; i++) {
            let snowFlake = new L10_Animation.Snowflakes();
            snowFlake.x = Math.random() * L10_Animation.crc2.canvas.width;
            snowFlake.y = Math.random() * L10_Animation.crc2.canvas.height;
            snowFlake.dy = Math.random() * 2 + 4;
            //            snowFlake.color = "#00ff00";
            snowflakes.push(snowFlake);
        }
        for (let i = 0; i < 10; i++) {
            let tree = new L10_Animation.Trees();
            tree.x = 15 + Math.random() * (L10_Animation.crc2.canvas.width - 520);
            tree.y = 170 + Math.random() * (L10_Animation.crc2.canvas.height - 250);
            L10_Animation.trees.push(tree);
        }
        for (let i = 0; i < 5; i++) {
            let child = new L10_Animation.ChildDown();
            child.x = 40;
            child.y = 130 * (Math.random() + 100);
            child.dx = +4;
            child.dy = +4;
        }
        for (let i = 0; i < 160; i++) {
            let child = new L10_Animation.ChildDown();
            child.x = 15 + Math.random() * (L10_Animation.crc2.canvas.width - 700);
            child.y = 200 + Math.random() * (L10_Animation.crc2.canvas.height - 300);
            childDown.push(child);
        }
        for (let i = 0; i < 5; i++) {
            let child = new L10_Animation.ChildUp();
            child.x = 40;
            child.y = 130 * (Math.random() + 100);
            child.dx = +4;
            child.dy = +4;
        }
        for (let i = 0; i < 160; i++) {
            let child = new L10_Animation.ChildUp();
            child.x = 15 + Math.random() * (L10_Animation.crc2.canvas.width - 700);
            child.y = 200 + Math.random() * (L10_Animation.crc2.canvas.height - 300);
            childUp.push(child);
        }
        //        function hitbox(_x: number, _y: number, _radius: number, _color: string) {
        //            this.x = _x;
        //            this.y = _y;
        //            this.radius = _radius;
        //       s._c       //        }
        update();
    }
    function drawSky() {
        L10_Animation.crc2.fillStyle = "#63B8ff";
        L10_Animation.crc2.fillRect(0, 0, 840, 360);
        L10_Animation.crc2.fill();
    }
    function drawSlope() {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(0, 100);
        L10_Animation.crc2.lineTo(700, 360);
        L10_Animation.crc2.lineTo(700, 700);
        L10_Animation.crc2.lineTo(0, 700);
        L10_Animation.crc2.lineTo(0, 300);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.fillStyle = "#FFFFFF";
        L10_Animation.crc2.fill();
    }
    function drawSun() {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.arc(780, 60, 50, 0, 2 * Math.PI);
        L10_Animation.crc2.fillStyle = "#FFD700";
        L10_Animation.crc2.fill();
    }
    function drawCloud() {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.arc(470, 80, 65, 0, 2 * Math.PI);
        L10_Animation.crc2.arc(540, 80, 55, 0, 2 * Math.PI);
        L10_Animation.crc2.arc(580, 80, 60, 0, 2 * Math.PI);
        L10_Animation.crc2.fillStyle = "#FFFFFF";
        L10_Animation.crc2.fill();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        L10_Animation.crc2.clearRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        L10_Animation.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 70; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < 10; i++) {
            let tree = L10_Animation.trees[i];
            tree.draw();
        }
        for (let i = 0; i < 5; i++) {
            // let tree: Trees = trees[i];
            let child = childDown[i];
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
        for (let i = 0; i < 5; i++) {
            //    let tree: Trees = trees[i];
            let child = childUp[i];
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
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Aufgabe10.js.map