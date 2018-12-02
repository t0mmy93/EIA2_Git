namespace Aufgabe_5 {
    document.addEventListener("DOMContentLoaded", init);
    function init(_event: Event): void {
        displayProdctsCategories(data);
        document.addEventListener("click", handleClick);
    }
    function handleClick(_event: MouseEvent): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let price: string = target.getAttribute("price");
        let name: string = target.getAttribute("productName");
        console.log(parseFloat(target.value));
        let amount: number = parseInt(target.value);
        let stepper: string = target.getAttribute("stepper");
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

    function displayProdctsCategories(_productCategories: ProductCategories): void {

        for (let categories in _productCategories) {
            let value: Products[] = _productCategories[categories];

            console.group("Kategorie " + categories);
            console.dir(value);
            console.groupEnd();
            console.log(categories + " categories");

            let form: HTMLElement = document.getElementById("form");
            let div0: HTMLDivElement = document.createElement("div");
            let div1: HTMLDivElement = document.createElement("div");
        //    form.setAttribute("id", "form");
            div0.innerHTML = ("Baumarten");
            div1.innerHTML = ("Dekoration");
            document.body.appendChild(form); // form Element für Aufgabe 6
            document.getElementById("form").appendChild(div0);
            document.getElementById("form").appendChild(div1);

            div0.setAttribute("id", "Baumarten");
            div1.setAttribute("id", "Dekoration");

            displayProducts(categories, value.length);
        }
    }

    function displayProducts(_categoryName: string, _anzahlInhalte: number): void {

        if (_categoryName == "Baumarten") {
            for (let i: number = 0; i < _anzahlInhalte; i++) {
                let nameForId: string = data[_categoryName][i].name + " Preis: " + data[_categoryName][i].price.toString();
                // fieldsets
                let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // label / inputs
                for (let j: number = 0; j < data[_categoryName][i].color.length; j++) {
                    let input: HTMLInputElement = document.createElement("input");
                    document.getElementById(_categoryName).appendChild(input);
                    input.setAttribute("type", data[_categoryName][i].inputType);
                    input.setAttribute("class", "inputs");
                    input.setAttribute("id", data[_categoryName][i].name + " " + i);
                    input.setAttribute("price", data[_categoryName][i].price.toString());
                    input.setAttribute("name", "data[_categoryName][i].name");
                    input.setAttribute("stepper", data["Baumarten"][i].stepper.toString());
                    input.setAttribute("productName", data[_categoryName][i].name + " Groesse: " + data[_categoryName][i].color[j]);

                    let label: HTMLLabelElement = document.createElement("label");
                    label.setAttribute("id", data[_categoryName][i].name + " " + i);
                    label.innerText = data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);
                }
            }
        }
        else {
            for (let i: number = 0; i < _anzahlInhalte; i++) {
                let nameForId: string = data[_categoryName][i].name + " Preis: " + data[_categoryName][i].price.toString();
                // fieldsets
                let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // legends
                for (let j: number = 0; j < data[_categoryName][i].color.length; j++) {
                    //      let input: HTMLInputElement = document.createElement("input");

                    //                    document.getElementById(_categoryName).appendChild(input);
                    //                    input.appendChild(document.createElement("br"));
                    //                    input.setAttribute("type", data[_categoryName][i].inputType);
                    //                    input.setAttribute("name", "inputs");
                    //                    input.setAttribute("class", "inputs");
                    //                    input.setAttribute("id", data[_categoryName][i].name + " " + j);
                    //                    input.setAttribute("price", data[_categoryName][i].price.toString());
                    //                    input.setAttribute("productName", data[_categoryName][i].name + " Farbe: " + data[_categoryName][i].color[j]);
                    //                    input.setAttribute("stepper", data["Dekoration"][i].stepper.toString());

                    let label: HTMLLabelElement = document.createElement("label");
                    label.setAttribute("id", data[_categoryName][i].name + " " + j);
                    label.innerText = data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);

                    if (data["Dekoration"][i].stepper == true) {
                        let stepper: HTMLInputElement = document.createElement("input");
                        document.getElementById("Dekoration").appendChild(stepper);
                        stepper.setAttribute("price", data["Dekoration"][i].price.toString());
                        stepper.setAttribute("productName", data["Dekoration"][i].name.toString() + " " + data["Dekoration"][i].color[j]);
                        stepper.setAttribute("name", "stepper");
                        stepper.setAttribute("type", "number");
                        stepper.setAttribute("value", "0");
                        stepper.setAttribute("min", "0");
                        stepper.setAttribute("id", data[_categoryName][i].name + " " + j);    //nameForId + i.toString()
                        //nameForId + i.toString()
                    }
                }
            }
        }
    }

    function displayCart(_productName: string, _productPrice: string, _productAmount: number, _productChecked: string): void {

        let list: HTMLElement = document.createElement("li");
        document.getElementById("cart").appendChild(list);
        console.log("displayCartFunction:  " + _productName + "  " + parseFloat(_productPrice));
        if (_productChecked == "false") {
            list.innerHTML = _productName + "  Preis  " + parseFloat(_productPrice);
        } else {
            let newPrice: number = (parseFloat(_productPrice) * _productAmount);
            console.log("NEW PRICE    ", _productName);
            list.innerHTML = _productName + "  Preis  " + newPrice;
        }
    }
}