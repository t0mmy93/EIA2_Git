/*
Aufgabe: (Aufgabe2_Uno)
cardName: (Bommer Tom)
Matrikel: (259510)
Datum: (21.10.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace UnoOnline_A31 {

    document.addEventListener("DOMContentLoaded", main);
    document.addEventListener("DOMContentLoaded", input);


    function input(): void {

        let button: HTMLElement = document.getElementById("button");
        button.addEventListener("click", sort);

        let pull: HTMLElement = document.getElementById("draw");
        pull.addEventListener("click", getRandomCard);

        let drop: HTMLElement = document.getElementById("Hand");
        drop.addEventListener("click", dropCard);

        document.addEventListener("keydown", spacebar);
    }

    let cardDeck: string[] = [
        "#ff00000", "#ff00001", "#ff00002", "#ff00003", "#ff00004", "#ff00005", "#ff00006", "#ff00007", "#ff00008", "#ff00009",                                         // 0-9
        "#00ff000", "#00ff001", "#00ff002", "#00ff003", "#00ff004", "#00ff005", "#00ff006", "#00ff007", "#00ff008", "#00ff009",                                         // 0-9
        "#ffff000", "#ffff001", "#ffff002", "#ffff003", "#ffff004", "#ffff005", "#ffff006", "#ffff007", "#ffff008", "#ffff009",                                         // 0-9
        "#0000ff0", "#0000ff1", "#0000ff2", "#0000ff3", "#0000ff4", "#0000ff5", "#0000ff6", "#0000ff7", "#0000ff8", "#0000ff9",                                         // 0-9
        "#ff00001", "#ff00002", "#ff00003", "#ff00004", "#ff00005", "#ff00006", "#ff00007", "#ff00008", "#ff00009",                                                     // 1-9
        "#00ff001", "#00ff002", "#00ff003", "#00ff004", "#00ff005", "#00ff006", "#00ff007", "#00ff008", "#00ff009",                                                     // 1-9
        "#ffff001", "#ffff002", "#ffff003", "#ffff004", "#ffff005", "#ffff006", "#ffff007", "#ffff008", "#ffff009",                                                     // 1-9
        "#0000ff1", "#0000ff2", "#0000ff3", "#0000ff4", "#0000ff5", "#0000ff6", "#0000ff7", "#0000ff8", "#0000ff9",                                                     // 1-9
        "#ff0000+2", "#ff0000+2", "#00ff00+2", "#00ff00+2", "#ffff00+2", "#ffff00+2", "#0000ff+2", "#0000ff+2",                                                         // +2
        "#ff0000x", "#ff0000x", "#00ff00x", "#00ff00x", "#ffff00x", "#ffff00x", "#0000ffx", "#0000ffx",                                                                 // Aussetzen
        "#ff0000chngDrctn", "#ff0000chngDrctn", "#00ff00chngDrctn", "#00ff00chngDrctn", "#ffff00chngDrctn", "#ffff00chngDrctn", "#0000ffchngDrctn", "#0000ffchngDrctn", // Richtungswechsel
        "#585858+4", "#585858+4", "#585858+4", "#585858+4",                                                                                                             // +4
        "#585858chngClr", "#585858chngClr", "#585858chngClr", "#585858chngClr"];                                                                                       // change Color
    //      console.log(cardDeck.length);

    let handCards: string[] = [];
    let stack: string[] = [];

    console.log(handCards);

    function randomNumber(x: number): number {
        return Math.floor(Math.random() * Math.floor(x));
    }

    function placeDiv(_cardColor: string, _cardName: string, _divNumber: number): void {
        let div: HTMLDivElement = document.createElement("div");
        let hand: HTMLElement = document.getElementById("Hand");
        //        let targetArray: string = _array;
        hand.appendChild(div);
        //      document.body.appendChild(div);
        let id: string = _divNumber.toString();
        div.setAttribute("id", id);
        div.classList.add("Handcards");
        div.innerHTML = _cardName;
        let s: CSSStyleDeclaration = div.style;
        s.backgroundColor = _cardColor;
        //        targetArray.push();
    }

    function main(): void {
        let cardsPulled: number;
        let cardsToPull: string = prompt("Wie viele Karten pro Spieler?");
        cardsPulled = Number(cardsToPull);
        for (let i: number = 0; cardsPulled > i; i++) {
            let randomCard: number = randomNumber(cardDeck.length);

            let str: string = cardDeck[randomCard];
            let cardColor: string = str.substring(0, 7);                        // Farbcode wird aus dem Array gezogen
            //            console.log(cardColor);
            let cardName: string = str.substring(7, 19);                        // cardName wird aus dem Array gezogen
            //            console.log(cardName);

            placeDiv(cardColor, cardName, i);
            cardDeck.splice(randomCard - 1, 1);                             // Element wird aus dem Array gelöscht
            console.log(cardDeck.length);
            handCards.push(str);
            //           console.log(handCards[]);
            //            handCards.sort();

        }
    }

    function sort(): void {
        handCards.sort();
        displayCards();
    }

    function getRandomCard(): void {
        if (cardDeck.length == 0) {
            //        altert("Deck is empty!");          wie erstelle ich einen Alert ? 
        } else {
            let randomCard: number = randomNumber(cardDeck.length);
            handCards.push(cardDeck[randomCard]);
            cardDeck.splice(randomCard, 1);

            displayCards();
        }

    }

    function displayCards(): void {
        document.getElementById("Hand").innerHTML = "";
        for (let j: number = 0; j < handCards.length; j++) {
            let str: string = handCards[j];      // werte m�ssen an placeDiv �begeben von den Karten aus handCards[]
            let cardColor: string = str.substring(0, 7);
            let cardName: string = str.substring(7, 19);
            //    console.log(cardColor, cardName);   
            //            handCards.push(str);
            placeDiv(cardColor, cardName, j);

        }
    }

    function spacebar(_event: KeyboardEvent): void {
        let keyCode: number = _event.keyCode;
        if (keyCode == 32) {
            getRandomCard();
        }
    }

    function dropCard(_event: MouseEvent): void {
        let domCard: HTMLElement = <HTMLElement>_event.target;  // domCard == die Karte auf den die Maus klickt 
        let cardId: number = parseInt(domCard.id);              // Farbwerte und name finden und in placeDiv einf�gen
        //        stack.push(handCards[cardId]);
        stack.push(handCards[cardId]);
        handCards.splice(cardId, 1);
        displayCards();
        displayStack();

        console.log(stack);

    }




    function displayStack(): void {

        console.log(stack);
 document.getElementById("Stack").innerHTML = "";
        let last: string = stack[stack.length - 1];
        let cardColor: string = last.substring(0, 7);
        let cardName: string = last.substring(7, 19);
        let div: HTMLDivElement = document.createElement("div");
        let stackOfCards: HTMLElement = document.getElementById("Stack");
        //        let targetArray: string = _array;
        stackOfCards.appendChild(div);
        div.innerHTML = cardName;
        let s: CSSStyleDeclaration = div.style;
        s.backgroundColor = cardColor;




        // console.log(cardColor, cardName);

    }
}