var unoVol2;
(function (unoVol2) {
    (function (cardColor) {
        cardColor[cardColor["red"] = 0] = "red";
        cardColor[cardColor["blue"] = 1] = "blue";
        cardColor[cardColor["green"] = 2] = "green";
        cardColor[cardColor["yellow"] = 3] = "yellow";
        cardColor[cardColor["black"] = 4] = "black";
    })(unoVol2.cardColor || (unoVol2.cardColor = {}));
    var cardColor = unoVol2.cardColor;
})(unoVol2 || (unoVol2 = {}));
//# sourceMappingURL=cards.js.map