var Boxes;
(function (Boxes) {
    let n = 5; // n c x y werden deklariert
    let c;
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50; // wenn i 2 ist + 20 sonst +50
        x = (x + 170) % 400; // modolu  (x + 170) % 400 = ergebniss ist der rest  
        switch (i) {
            case 0:
                c = "#ff0000"; // farbcodes
                break; // bricht den code ab 
            case 1:
            case 4:
                c = "#00ff00"; // farbcodes
                break;
            case 3:
                continue;
            default:
                c = "#0000ff"; // farbcodes
        }
        for (let a = 50; a > 0; a -= 20) {
            placeDiv(c, x, y, a, a); // matrix koordienaten ?
            if (i == 4)
                break;
        }
    }
    function placeDiv(_color, _x, _y, _width, _height) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
})(Boxes || (Boxes = {}));
//# sourceMappingURL=boxes.js.map