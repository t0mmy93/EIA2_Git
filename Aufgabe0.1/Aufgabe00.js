var aufgabe0;
(function (aufgabe0) {
    var name = "";
    function main() {
        var name = prompt("Gib deinen Namen ein");
        var node = document.getElementById("inhalt");
        node.innerHTML += "Moin ";
        node.innerHTML += name;
        node.innerHTML += ", schoenen Tag.";
        console.log("Moin " + name + ", ich wuensche die einen schoenen Tag.");
    }
    document.addEventListener('DOMContentLoaded', main);
})(aufgabe0 || (aufgabe0 = {}));
//# sourceMappingURL=Aufgabe00.js.map