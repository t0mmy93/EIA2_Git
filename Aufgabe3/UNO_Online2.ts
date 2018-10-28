/*
Aufgabe: (Aufgabe2_Uno)
Name: (Bommer Tom)
Matrikel: (259510)
Datum: (21.10.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace unoonline4 {

    let deck = ["r0", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "y0", "y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8", "y9", "g0", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8", "y9", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "r+2", "r+2", "g+2", "g+2", "y+2", "y+2", "b+2", "b+2", "rx", "rx", "gx", "gx", "yx", "yx", "bx", "bx", "r<=>", "r<=>", "g<=>", "g<=>", "y<=>", "y<=>", "b<=>", "b<=>", "n+4", "n+4", "n+4", "n+4", "n<c>", "n<c>", "n<c>", "n<c>"];
    let r: string = "r";
    let y: string = "y";
    let g: string = "g";
    let b: string = "b";
    let n: string = "n";
    // generiert eine zufällige Nummer
    function random(x: number): number {
        let randomNumber: number;
        return Math.floor(Math.random() * Math.floor(x));
    }
    // plaziert ein Span-Element 
    function placeSpan(color: string, name: string, _q: number): void {   // 1.Farbe 2.Name 3.randomNumber
        r = "#ff0000";
        y = "#ffff00";
        g = "#00ff00";
        b = "#0000ff";
        n = "#000000";
        let span: HTMLSpanElement = document.createElement("span");
        document.body.appendChild(span);
        span.setAttribute("id", "a" + _q);
        document.getElementById("a" + _q).innerHTML += name;
        let s: CSSStyleDeclaration = span.style;
        s.backgroundColor = color;
        //  console.log(name3);
    }
    // main function
    function main(): void {

        let j: number;
        let i: string = prompt("Wie viele Karten pro Spieler?");
        j = Number(i);

        for (let d: number = 0; j > d; d++) {
            let l: number = random(deck.length);
            
            let str: string = deck[l];
            
            let color: string = str.substring(0, 1);
            console.log(str.substring(0, 1));
            
            let name: string = str.substring(1, 6);
            console.log(str.substring(1, 6));

            placeSpan(color, name, l);

            let remove = deck.splice(l - 1, 1);
            let lenght: number = deck.length;
            console.log(lenght);
            continue;
        }
    }
    document.addEventListener("DOMContentLoaded", main);
}