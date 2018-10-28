/*
Aufgabe: (Aufgabe2_Uno)
Name: (Bommer Tom)
Matrikel: (259510)
Datum: (21.10.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var unoonline4;
(function (unoonline4) {
    let deck = ["r0", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "y0", "y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8", "y9", "g0", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8", "y9", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "r+2", "r+2", "g+2", "g+2", "y+2", "y+2", "b+2", "b+2", "rx", "rx", "gx", "gx", "yx", "yx", "bx", "bx", "r<=>", "r<=>", "g<=>", "g<=>", "y<=>", "y<=>", "b<=>", "b<=>", "n+4", "n+4", "n+4", "n+4", "n<c>", "n<c>", "n<c>", "n<c>"];
    let r = "r";
    let y = "y";
    let g = "g";
    let b = "b";
    let n = "n";
    // generiert eine zufällige Nummer
    function random(x) {
        let randomNumber;
        return Math.floor(Math.random() * Math.floor(x));
    }
    // plaziert ein Span-Element 
    function placeSpan(color, name, _q) {
        r = "#ff0000";
        y = "#ffff00";
        g = "#00ff00";
        b = "#0000ff";
        n = "#000000";
        let span = document.createElement("span");
        document.body.appendChild(span);
        span.setAttribute("id", "a" + _q);
        document.getElementById("a" + _q).innerHTML += name;
        let s = span.style;
        s.backgroundColor = color;
        //  console.log(name3);
    }
    // main function
    function main() {
        let j;
        let i = prompt("Wie viele Karten pro Spieler?");
        j = Number(i);
        for (let d = 0; j > d; d++) {
            let l = random(deck.length);
            let str = deck[l];
            let color = str.substring(0, 1);
            console.log(str.substring(0, 1));
            let name = str.substring(1, 6);
            console.log(str.substring(1, 6));
            placeSpan(color, name, l);
            let remove = deck.splice(l - 1, 1);
            let lenght = deck.length;
            console.log(lenght);
            continue;
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(unoonline4 || (unoonline4 = {}));
//# sourceMappingURL=UNO_Online2.js.map