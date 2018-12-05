namespace Aufgabe_6 {
    document.addEventListener("DOMContentLoaded", init);
    function init(_event: Event): void {
        displayProdctsCategories(data);
        document.addEventListener("click", handleClick);
        document.addEventListener("change", handleChange);
    }

    function handleChange(_event: Event): void {
        let cart: HTMLElement = document.getElementById("cart");
        cart.innerHTML = "";
        cart.innerHTML = "<h2>" + "Warenkorb" + "</h2>";
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


        for (let i: number = 0; i < inputs.length; i++) {
            let product: HTMLInputElement = inputs[i];
            //  console.log("INPUTS " + inputs[i]);
            if (parseFloat(product.value) >= 1 || product.checked == true) {
                displayCart(_event, inputs[i]);
            }
        }
    }




    function handleClick(_event: MouseEvent): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let price: string = target.getAttribute("price");
        let name: string = target.getAttribute("productName");
        console.log(parseFloat(target.value));
        let amount: number = parseInt(target.value);

        console.log("NAME  ", name);
        console.log("Stepperwert  ", amount);
        console.log("PRICE  ", price);
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
                    input.setAttribute("name", "Baeume");
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

                    let label: HTMLLabelElement = document.createElement("label");
                    label.setAttribute("id", data[_categoryName][i].name + " " + j);
                    label.innerText = data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);

                    if (data["Dekoration"][i].stepper == true) {
                        let stepper: HTMLInputElement = document.createElement("input");
                        document.getElementById("Dekoration").appendChild(stepper);
                        stepper.setAttribute("price", data["Dekoration"][i].price.toString());
                        stepper.setAttribute("productName", data["Dekoration"][i].name.toString() + " " + data["Dekoration"][i].color[j]);
                        stepper.setAttribute("name", data["Dekoration"][i].name + " " + data["Dekoration"][i].color[j]);
                        stepper.setAttribute("type", "number");
                        stepper.setAttribute("value", "0");
                        stepper.setAttribute("min", "0");
                        stepper.setAttribute("id", "input");
                    }
                }
            }
        }
    }

    function displayCart(_event: Event, _input: HTMLInputElement): void {
        let cart: HTMLElement = document.getElementById("cart");
        //  let target: string = _input.getAttribute("name");     //<HTMLInputElement>_event.target;  
        //    console.log("TARGET " + target);
        let productPrice: number = parseFloat(_input.getAttribute("price"));
        let productName: string = _input.getAttribute("productName");
        let productAmount: number = parseFloat(_input.value);
        let newPrice: number = productPrice * productAmount;
        cart.innerHTML = productAmount + "x " + productName + " " + newPrice + "Euro";

    }
}