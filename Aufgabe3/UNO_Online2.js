/*
Aufgabe: (Aufgabe2_Uno)
Name: (Bommer Tom)
Matrikel: (259510)
Datum: (21.10.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var unoonline4;
(function (unoonline4) {
    let deck = ["#ff00000", "#ff00001", "#ff00002", "#ff00003", "#ff00004", "#ff00005", "#ff00006", "#ff00007", "#ff00008", "#ff00009", "#ffff000", "#ffff001", "#ffff002", "#ffff003", "#ffff004", "#ffff005", "#ffff006", "#ffff007", "#ffff008", "#ffff009", "#00ff000", "#00ff001", "#00ff002", "#00ff003", "#00ff004", "#00ff005", "#00ff006", "#00ff007", "#00ff008", "#00ff009", "#0000ff0", "#0000ff1", "#0000ff2", "#0000ff3", "#0000ff4", "#0000ff5", "#0000ff6", "#0000ff7", "#0000ff8", "#0000ff9", "#ff00001", "#ff00002", "#ff00003", "#ff00004", "#ff00005", "#ff00006", "#ff00007", "#ff00008", "#ff00009", "#ffff001", "#ffff002", "#ffff003", "#ffff004", "#ffff005", "#ffff006", "#ffff007", "#ffff008", "#ffff009", "#00ff001", "#00ff002", "#00ff003", "#00ff004", "#00ff005", "#00ff006", "#00ff007", "#00ff008", "#00ff009", "#0000ff1", "#0000ff2", "#0000ff3", "#0000ff4", "#0000ff5", "#0000ff6", "#0000ff7", "#0000ff8", "#0000ff9", "#ff0000+2", "#ff0000+2", "#00ff00+2", "#00ff00+2", "#ffff00+2", "#ffff00+2", "#0000ff+2", "#0000ff+2", "#ff0000x", "#ff0000x", "#00ff00x", "#00ff00x", "#ffff00x", "#ffff00x", "#0000ffx", "#0000ffx", "#ff0000<=>", "#ff0000<=>", "#00ff00<=>", "#00ff00<=>", "#ffff00<=>", "#ffff00<=>", "#0000ff<=>", "#0000ff<=>", "#585858+4", "#585858+4", "#585858+4", "#585858+4", "#585858<c>", "#585858<c>", "#585858<c>", "#585858<c>"];
    function random(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    function placeSpan(color, name, _q) {
        let span = document.createElement("span");
        document.body.appendChild(span);
        span.setAttribute("id", "a" + _q);
        span.innerHTML = name;
        let s = span.style;
        s.backgroundColor = color;
    }
    function main() {
        let j;
        let i = prompt("Wie viele Karten pro Spieler?");
        j = Number(i);
        for (let d = 0; j > d; d++) {
            let l = random(deck.length);
            let str = deck[l];
            let color = str.substring(0, 7); // Farbcode wird aus dem Array gezogen
            console.log(color);
            let name = str.substring(7, 10); // Name wird aus dem Array gezogen
            console.log(name);
            placeSpan(color, name, l);
            let remove = deck.splice(l - 1, 1); // Element wird aus dem Array gelöscht
            let lenght = deck.length;
            console.log(lenght);
            continue;
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(unoonline4 || (unoonline4 = {}));
//# sourceMappingURL=UNO_Online2.js.map