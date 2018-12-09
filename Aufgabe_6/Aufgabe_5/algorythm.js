var Aufgabe_6;
(function (Aufgabe_6) {
    document.addEventListener("DOMContentLoaded", init);
    let address = "http://localhost:8100";
    function init(_event) {
        displayProdctsCategories(Aufgabe_6.data);
        document.addEventListener("click", handleClick);
        document.addEventListener("change", handleChange);
        setupAsyncForm(); // Aufgabe neu
    }
    function handleChange(_event) {
        let cart = document.getElementById("cart");
        cart.innerHTML = "";
        cart.innerHTML = "<h2>" + "Warenkorb" + "</h2>";
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            let product = inputs[i];
            if (parseFloat(product.value) >= 1 || product.checked == true) {
                displayCart(_event, inputs[i]);
            }
        }
    }
    // Aufgabe neu
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        let articles = document.getElementsByTagName("input");
        let orderList = [];
        for (let i = 0; i < articles.length; i++) {
            let products = articles[i];
            if (products.checked == true) {
                let color = products.name + " " + products.getAttribute("price") + " Euro";
                sendRequestWithCustomData(color);
                orderList.push(color);
            }
            else {
                if (Number(products.value) > 0) {
                    let color = products.name + " " + (Number(products.getAttribute("price")) * Number(products.value)) + " Euro";
                    sendRequestWithCustomData(color);
                    orderList.push(color);
                }
            }
        }
        let displayOrder = document.createElement("div");
        displayOrder.setAttribute("id", "order");
        displayOrder.innerText = "";
        for (let i = 0; i < orderList.length; i++) {
            displayOrder.innerText += orderList[i] /*+ "<br>"*/; // warum geht br nicht ? 
        }
        document.getElementById("bestellschein").appendChild(displayOrder);
    }
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?products=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    //Aufgabe NEU       
    function handleClick(_event) {
        let target = _event.target;
        let price = target.getAttribute("price");
        let name = target.getAttribute("productName");
        //   console.log(parseFloat(target.value));
        let amount = parseInt(target.value);
        //        console.log("NAME  ", name);
        //        console.log("Stepperwert  ", amount);
        //        console.log("PRICE  ", price);
    }
    function displayProdctsCategories(_productCategories) {
        for (let categories in _productCategories) {
            let value = _productCategories[categories];
            //            console.group("Kategorie " + categories);
            //            console.dir(value);
            //            console.groupEnd();
            //            console.log(categories + " categories");
            let form = document.getElementById("form");
            let div0 = document.createElement("div");
            let div1 = document.createElement("div");
            div0.innerHTML = ("Baumarten");
            div1.innerHTML = ("Dekoration");
            document.body.appendChild(form);
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
                let nameForId = Aufgabe_6.data[_categoryName][i].name + " Preis: " + Aufgabe_6.data[_categoryName][i].price.toString();
                // fieldsets
                let fieldset = document.createElement("fieldset");
                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // label / inputs
                for (let j = 0; j < Aufgabe_6.data[_categoryName][i].color.length; j++) {
                    let input = document.createElement("input");
                    document.getElementById(_categoryName).appendChild(input);
                    input.setAttribute("type", Aufgabe_6.data[_categoryName][i].inputType);
                    input.setAttribute("class", "inputs");
                    input.setAttribute("id", Aufgabe_6.data[_categoryName][i].name + " " + i);
                    input.setAttribute("price", Aufgabe_6.data[_categoryName][i].price.toString());
                    input.setAttribute("name", "Baeume"); // �ndern
                    input.setAttribute("stepper", Aufgabe_6.data["Baumarten"][i].stepper.toString());
                    input.setAttribute("productName", Aufgabe_6.data[_categoryName][i].name + " Groesse: " + Aufgabe_6.data[_categoryName][i].color[j]);
                    let label = document.createElement("label");
                    label.setAttribute("id", Aufgabe_6.data[_categoryName][i].name + " " + i);
                    label.innerText = Aufgabe_6.data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);
                }
            }
        }
        else {
            for (let i = 0; i < _anzahlInhalte; i++) {
                let nameForId = Aufgabe_6.data[_categoryName][i].name + " Preis: " + Aufgabe_6.data[_categoryName][i].price.toString();
                // fieldsets
                let fieldset = document.createElement("fieldset");
                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // legends
                for (let j = 0; j < Aufgabe_6.data[_categoryName][i].color.length; j++) {
                    let label = document.createElement("label");
                    label.setAttribute("id", Aufgabe_6.data[_categoryName][i].name + " " + j);
                    label.innerText = Aufgabe_6.data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);
                    if (Aufgabe_6.data["Dekoration"][i].stepper == true) {
                        let stepper = document.createElement("input");
                        document.getElementById("Dekoration").appendChild(stepper);
                        stepper.setAttribute("price", Aufgabe_6.data["Dekoration"][i].price.toString());
                        stepper.setAttribute("productName", Aufgabe_6.data["Dekoration"][i].name.toString() + " " + Aufgabe_6.data["Dekoration"][i].color[j]);
                        stepper.setAttribute("name", Aufgabe_6.data["Dekoration"][i].name + " " + Aufgabe_6.data["Dekoration"][i].color[j]);
                        stepper.setAttribute("type", "number");
                        stepper.setAttribute("value", "0");
                        stepper.setAttribute("min", "0");
                        stepper.setAttribute("id", "input");
                    }
                }
            }
        }
    }
    function displayCart(_event, _input) {
        let cart = document.getElementById("cart");
        //  let target: string = _input.getAttribute("name");     //<HTMLInputElement>_event.target;  
        //    console.log("TARGET " + target);
        let productPrice = parseFloat(_input.getAttribute("price"));
        let productName = _input.getAttribute("productName");
        let productAmount = parseFloat(_input.value);
        let newPrice = productPrice * productAmount;
        cart.innerHTML = productAmount + "x " + productName + " " + newPrice + "Euro";
    }
})(Aufgabe_6 || (Aufgabe_6 = {}));
//# sourceMappingURL=algorythm.js.map