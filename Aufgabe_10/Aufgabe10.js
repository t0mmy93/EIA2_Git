var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let trees = [];
    let childs = [];
    let imgData;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = canvas.getContext("2d");
        console.log(L10_Animation.crc2);
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
            trees.push(tree);
        }
        for (let i = 0; i < 160; i++) {
            let child = new L10_Animation.Childs();
            child.x = 40;
            child.y = 130 * (Math.random() + 100);
            child.dx = +4;
            child.dy = +4;
        }
        for (let i = 0; i < 3; i++) {
            let child = new L10_Animation.Childs();
            child.x = 15 + Math.random() * (L10_Animation.crc2.canvas.width - 700);
            child.y = 200 + Math.random() * (L10_Animation.crc2.canvas.height - 300);
            childs.push(child);
        }
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
        for (let i = 0; i < 30; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < 5; i++) {
            let tree = trees[i];
            tree.draw();
        }
        for (let i = 0; i < 10; i++) {
            let child = childs[i];
            child.draw();
            child.move();
        }
        //  console.log("Update");
    }
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Aufgabe10.js.map