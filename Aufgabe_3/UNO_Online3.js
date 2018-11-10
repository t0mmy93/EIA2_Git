/*
Aufgabe: (Aufgabe2_Uno)
cardName: (Bommer Tom)
Matrikel: (259510)
Datum: (21.10.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var UnoOnline_A3;
(function (UnoOnline_A3) {
    document.addEventListener("DOMContentLoaded", main);
    let cardDeck = [
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
        "#585858+4", "#585858+4", "#585858+4", "#585858+4",
        "#585858chngClr", "#585858chngClr", "#585858chngClr", "#585858chngClr"]; // change Color
    //      console.log(cardDeck.length);
    let handCards;
    function randomNumber(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    function placeSpan(_cardColor, _cardName, _q) {
        let span = document.createElement("span");
        document.body.appendChild(span);
        span.setAttribute("id", "a" + _q);
        span.innerHTML = _cardName;
        let s = span.style;
        s.backgroundColor = _cardColor;
    }
    //    function addCardsToArray(_cardColor: string, _cardValue: string): void {
    //        handCards.push(_cardColor, _cardValue);
    //    document.getElementById("demo").innerHTML = fruits;
    //    }
    function main() {
        let cardsPulled;
        let cardsToPull = prompt("Wie viele Karten pro Spieler?");
        cardsPulled = Number(cardsToPull);
        for (let i = 0; cardsPulled > i; i++) {
            let randomCard = randomNumber(cardDeck.length);
            let str = cardDeck[randomCard];
            let cardColor = str.substring(0, 7); // Farbcode wird aus dem Array gezogen
            console.log(cardColor);
            let cardName = str.substring(7, 19); // cardName wird aus dem Array gezogen
            console.log(cardName);
            placeSpan(cardColor, cardName, randomCard);
            cardDeck.splice(randomCard - 1, 1); // Element wird aus dem Array gelöscht
            console.log(cardDeck.length);
            handCards.push(str);
            console.log(handCards);
        }
        //        function sortCards(): void {
        //            handCards.sort();
        //        }
        //        function input(): void {
        //            let button: HTMLElement = document.getElementById("button");
        //            button.addEventListener("click", sortCards);
        //             let pull: HTMLElement = document.getElementById("Nachziehstapel");
        //             pull.Listener("click", pumNa); 
        //  }
    }
})(UnoOnline_A3 || (UnoOnline_A3 = {}));
//# sourceMappingURL=UNO_Online3.js.map