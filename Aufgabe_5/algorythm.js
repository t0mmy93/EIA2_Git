var Aufgabe_5;
(function (Aufgabe_5) {
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        displayProdctsCategories(Aufgabe_5.data);
        document.addEventListener("click", handleClick);
    }
    function handleClick(_event) {
        let target = _event.target;
        let price = target.getAttribute("price");
        let name = target.getAttribute("productname");
        console.log(parseFloat(target.value));
        let amount = parseInt(target.value);
        let stepper = target.getAttribute("stepper");
        console.log("NAME  ", name);
        console.log("Stepperwert  ", amount);
        console.log("PRICE  ", price);
        if (amount == 0) {
            displayCart(name, price, 1, stepper);
        }
        else {
            displayCart(name, price, amount, stepper);
        }
    }
    function displayProdctsCategories(_productCategories) {
        for (let categories in _productCategories) {
            let value = _productCategories[categories];
            console.group("Kategorie " + categories);
            console.dir(value);
            console.groupEnd();
            console.log(categories + " categories");
            let form = document.createElement("form");
            let div0 = document.createElement("div");
            let div1 = document.createElement("div");
            form.setAttribute("id", "form");
            div0.innerHTML = ("Baumarten");
            div1.innerHTML = ("Dekoration");
            document.body.appendChild(form); // form Element f�r Aufgabe 6
            document.getElementById("form").appendChild(div0);
            document.getElementById("form").appendChild(div1);
            div0.setAttribute("id", "Baumarten");
            div1.setAttribute("id", "Dekoration");
            displayProducts(categories, value.length);
        }
    }
    function displayProducts(_categoryName, _anzahlInhalte) {
        if (_categoryName == "Baumarten") {
            for (let i = 0; i < _anzahlInhalte; i++) {
                let nameForId = Aufgabe_5.data[_categoryName][i].name + " Preis: " + Aufgabe_5.data[_categoryName][i].price.toString();
                // fieldsets
                let fieldset = document.createElement("fieldset");
                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // label / inputs
                for (let j = 0; j < Aufgabe_5.data[_categoryName][i].color.length; j++) {
                    let input = document.createElement("input");
                    document.getElementById(_categoryName).appendChild(input);
                    input.setAttribute("type", Aufgabe_5.data[_categoryName][i].inputType);
                    input.setAttribute("class", "inputs");
                    input.setAttribute("id", Aufgabe_5.data[_categoryName][i].name + " " + i);
                    input.setAttribute("price", Aufgabe_5.data[_categoryName][i].price.toString());
                    input.setAttribute("name", "rdiobutton");
                    input.setAttribute("stepper", Aufgabe_5.data["Baumarten"][i].stepper.toString());
                    input.setAttribute("productName", Aufgabe_5.data[_categoryName][i].name + " Groesse: " + Aufgabe_5.data[_categoryName][i].color[j]);
                    let label = document.createElement("label");
                    label.setAttribute("id", Aufgabe_5.data[_categoryName][i].name + " " + i);
                    label.innerText = Aufgabe_5.data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);
                }
            }
        }
        else {
            for (let i = 0; i < _anzahlInhalte; i++) {
                let nameForId = Aufgabe_5.data[_categoryName][i].name + " Preis: " + Aufgabe_5.data[_categoryName][i].price.toString();
                // fieldsets
                let fieldset = document.createElement("fieldset");
                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // legends
                for (let j = 0; j < Aufgabe_5.data[_categoryName][i].color.length; j++) {
                    let input = document.createElement("input");
                    document.getElementById(_categoryName).appendChild(input);
                    input.appendChild(document.createElement("br"));
                    input.setAttribute("type", Aufgabe_5.data[_categoryName][i].inputType);
                    input.setAttribute("name", "inputs");
                    input.setAttribute("class", "inputs");
                    input.setAttribute("id", Aufgabe_5.data[_categoryName][i].name + " " + j);
                    input.setAttribute("price", Aufgabe_5.data[_categoryName][i].price.toString());
                    input.setAttribute("productName", Aufgabe_5.data[_categoryName][i].name + " Farbe: " + Aufgabe_5.data[_categoryName][i].color[j]);
                    input.setAttribute("stepper", Aufgabe_5.data["Dekoration"][i].stepper.toString());
                    let label = document.createElement("label");
                    label.setAttribute("id", Aufgabe_5.data[_categoryName][i].name + " " + j);
                    label.innerText = Aufgabe_5.data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);
                    if (Aufgabe_5.data["Dekoration"][i].stepper == true) {
                        let stepper = document.createElement("input");
                        document.getElementById("Dekoration").appendChild(stepper);
                        stepper.setAttribute("price", Aufgabe_5.data["Dekoration"][i].price.toString());
                        stepper.setAttribute("type", "number");
                        stepper.setAttribute("value", "0");
                        stepper.setAttribute("min", "0");
                        stepper.setAttribute("id", Aufgabe_5.data[_categoryName][i].name + " " + j); //nameForId + i.toString()
                        stepper.setAttribute("name", Aufgabe_5.data[_categoryName][i].name); //nameForId + i.toString()
                    }
                }
            }
        }
    }
    function displayCart(_productName, _productPrice, _productAmount, _productChecked) {
        let list = document.createElement("li");
        document.getElementById("cart").appendChild(list);
        console.log("displayCartFunction:  " + _productName + "  " + parseFloat(_productPrice));
        if (_productChecked == "false") {
            list.innerHTML = _productName + "  Preis  " + parseFloat(_productPrice);
        }
        else {
            let newPrice = (parseFloat(_productPrice) * _productAmount);
            console.log("NEW PRICE    ", _productName);
            list.innerHTML = _productName + "  Preis  " + newPrice;
        }
    }
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=algorythm.js.map