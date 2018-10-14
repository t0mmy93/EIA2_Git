namespace Boxes {
    let n: number = 5; // n c x y werden deklariert
    let c: string;
    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < n; i++) { // i = number  i muss kleiner als n sein   i++= erhöht i um 1 
        y += (i == 2) ? 20 : 50; // wenn i 2 ist + 20 sonst +50
        x = (x + 170) % 400;    // modolu  (x + 170) % 400 = ergebniss ist der rest  
        switch (i) {    // vereinfachte schreibweise  von vielen if funktionen 
            case 0:
                c = "#ff0000"; // farbcodes
                break;    // bricht den code ab 
            case 1:
            case 4:
                c = "#00ff00";   // farbcodes
                break;
            case 3:
                continue;
            default:
                c = "#0000ff";   // farbcodes
        }
        for (let a: number = 50; a > 0; a -= 20) { // a = 50   , a muss größer 0 sein   , a= a-20
            placeDiv(c, x, y, a, a);  // matrix koordienaten ?
            if (i == 4)  // sobald i = 4 abbruch druch break
                break;
        }
    }


    function placeDiv(_color: string, _x: number, _y: number, _width: number, _height: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
}