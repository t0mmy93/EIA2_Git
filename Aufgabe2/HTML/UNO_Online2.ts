/*
Aufgabe: (Aufgabe2_Uno)
cardName: (Bommer Tom)
Matrikel: (259510)
Datum: (21.10.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace unoonline4 {

    let cardDeck: string[] = [
        "#ff00000", "#ff00001", "#ff00002", "#ff00003", "#ff00004", "#ff00005", "#ff00006", "#ff00007", "#ff00008", "#ff00009",
        "#00ff000", "#00ff001", "#00ff002", "#00ff003", "#00ff004", "#00ff005", "#00ff006", "#00ff007", "#00ff008", "#00ff009",
        "#ffff000", "#ffff001", "#ffff002", "#ffff003", "#ffff004", "#ffff005", "#ffff006", "#ffff007", "#ffff008", "#ffff009",
        "#0000ff0", "#0000ff1", "#0000ff2", "#0000ff3", "#0000ff4", "#0000ff5", "#0000ff6", "#0000ff7", "#0000ff8", "#0000ff9",
        "#ff00001", "#ff00002", "#ff00003", "#ff00004", "#ff00005", "#ff00006", "#ff00007", "#ff00008", "#ff00009",
        "#00ff001", "#00ff002", "#00ff003", "#00ff004", "#00ff005", "#00ff006", "#00ff007", "#00ff008", "#00ff009",
        "#ffff001", "#ffff002", "#ffff003", "#ffff004", "#ffff005", "#ffff006", "#ffff007", "#ffff008", "#ffff009",
        "#0000ff1", "#0000ff2", "#0000ff3", "#0000ff4", "#0000ff5", "#0000ff6", "#0000ff7", "#0000ff8", "#0000ff9",
        "#ff0000+2", "#ff0000+2", "#00ff00+2", "#00ff00+2", "#ffff00+2", "#ffff00+2", "#0000ff+2", "#0000ff+2",
        "#ff0000x", "#ff0000x", "#00ff00x", "#00ff00x", "#ffff00x", "#ffff00x", "#0000ffx", "#0000ffx",
        "#ff0000chngDrctn", "#ff0000chngDrctn", "#00ff00chngDrctn", "#00ff00chngDrctn", "#ffff00chngDrctn", "#ffff00chngDrctn", "#0000ffchngDrctn", "#0000ffchngDrctn",
        "#585858+4", "#585858+4", "#585858+4", "#585858+4", "#585858chngClr", "#585858chngClr", "#585858chngClr", "#585858chngClr"];
    //      console.log(cardDeck.length);
    function random(x: number): number {
        return Math.floor(Math.random() * Math.floor(x));
    }
    function placeSpan(cardColor: string, cardName: string, _q: number): void {
        let span: HTMLSpanElement = document.createElement("span");
        document.body.appendChild(span);
        span.setAttribute("id", "a" + _q);
        span.innerHTML = cardName;
        let s: CSSStyleDeclaration = span.style;
        s.backgroundColor = cardColor;
    }
    function main(): void {
        let j: number;
        let i: string = prompt("Wie viele Karten pro Spieler?");
        j = Number(i);
        for (let d: number = 0; j > d; d++) {
            let l: number = random(cardDeck.length);
            let str: string = cardDeck[l];
            let cardColor: string = str.substring(0, 7);                        // Farbcode wird aus dem Array gezogen
            console.log(cardColor);
            let cardName: string = str.substring(7, 19);                        // cardName wird aus dem Array gezogen
            console.log(cardName);
            placeSpan(cardColor, cardName, l);
            cardDeck.splice(l - 1, 1);                             // Element wird aus dem Array gelöscht
            let lenght: number = cardDeck.length;
            console.log(lenght);
            continue;
        }
    }
    document.addEventListener("DOMContentLoaded", main);
}