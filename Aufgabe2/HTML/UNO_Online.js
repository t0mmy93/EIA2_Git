/* Aufgabe: Aufgabe 2
Name: Nico Herrmann
Matrikel: 259242
Datum: 19.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var uno;
(function (uno) {
    let k0 = {
        name: "0",
        red: 1,
        yellow: 1,
        green: 1,
        blue: 1,
        value: 0
    };
    let k1 = {
        name: "1",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 1
    };
    let k2 = {
        name: "2",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 2
    };
    let k3 = {
        name: "3",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 3
    };
    let k4 = {
        name: "4",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 4
    };
    let k5 = {
        name: "5",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 5
    };
    let k6 = {
        name: "6",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 6
    };
    let k7 = {
        name: "7",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 7
    };
    let k8 = {
        name: "8",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 8
    };
    let k9 = {
        name: "9",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 9
    };
    let k10 = {
        name: "change Direction",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 10
    };
    let k11 = {
        name: "+2",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 10
    };
    let k12 = {
        name: "Expose",
        red: 2,
        yellow: 2,
        green: 2,
        blue: 2,
        value: 10
    };
    let plusFour = 4; //Schwarze +4
    let colorSwap = 4; //Schwarze Farbwahl
    let c = ""; //Farbcode
    let allCards = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12]; //Array
    /*   FUNKTIONEN           */
    function random(_n) {
        return Math.floor(Math.random() * Math.floor(_n));
    }
    function placeDiv(_color, _n, _x) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x); //div ID in Abh�ngigkeit von _x (aktuelle cards die gegeben wird)
        document.getElementById("a" + _x).innerHTML += _n; //Bezeichnung der cards als HTML in div
        //console.log(_color, _n, _x);
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 150 + "px";
        s.height = 130 + "px";
        s.left = (_x + 0.5) * 100 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 5 + "px";
        if (_color == "#000000") {
            s.color = "white";
        }
        if (_color == "#0000ff") {
            s.color = "white";
        }
    }
    /*   FUNKTIONEN ENDE  */
    function main() {
        let z;
        let i = prompt("Wie viele cardsn pro Spieler?");
        z = Number(i);
        for (let d = 0; d < z; d++) {
            let l = random(15); //l = Zufallswert von 0-14 (alle cardsn)
            if (l == 13 && plusFour > 0) {
                c = "#000000";
                plusFour--;
                placeDiv(c, "+4", d);
                continue;
            }
            else if (l == 13 && plusFour <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && colorSwap > 0) {
                    c = "#000000";
                    colorSwap--;
                    placeDiv(c, "Color Change", d);
                    continue;
                }
                else if (l == 14 && colorSwap <= 0) {
                    d--;
                    continue;
                }
                else {
                    let r = random(4); //random Zahl von 0-3 jeweils eine Farbe
                    switch (r) {
                        case 0:
                            c = "#ff0000"; //red
                            if (allCards[l].red > 0) {
                                placeDiv(c, allCards[l].name, d);
                                allCards[l].red--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 1:
                            c = "#00ff00"; //gr�n
                            if (allCards[l].green > 0) {
                                placeDiv(c, allCards[l].name, d);
                                allCards[l].green--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 2:
                            c = "#0000ff"; //blue
                            if (allCards[l].blue > 0) {
                                placeDiv(c, allCards[l].name, d);
                                allCards[l].blue--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 3:
                            c = "#ffff00"; //yellow
                            if (allCards[l].yellow > 0) {
                                placeDiv(c, allCards[l].name, d);
                                allCards[l].yellow--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                    }
                }
            }
        }
        function Stapel(x) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            let s = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = "#f0f0f0";
            s.width = 70 + "px";
            s.height = 150 + "px";
            s.left = (x + 0.5) * 20 + "px";
            s.top = (x + 0.5) * 10 + "px";
            s.borderRadius = 5 + "px";
        }
        function Ablage() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "white";
            s.width = 70 + "px";
            s.height = 150 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }
        for (let i = 0; i < 3; i++) {
            Stapel(i);
        }
        Ablage();
    }
    document.addEventListener("DOMContentLoaded", main);
})(uno || (uno = {}));
//# sourceMappingURL=UNO_Online.js.map