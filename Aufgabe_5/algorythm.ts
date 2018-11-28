namespace Aufgabe_5 {
    //   console.log(data["Dekoration"][0].color[0]);
    document.addEventListener("DOMContentLoaded", init);
    // console.log("1 " + data);
    function init(_event: Event): void {
        displayProdctsCategories(data);
        document.addEventListener("click", handleClick);
    }

    function handleClick(_event: MouseEvent): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //   let stepper : HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("inputs");
        let price: number = parseFloat(target.getAttribute("price"));
        let name: string = target.getAttribute("productname");
        let amount: number = parseFloat(target.value);
        console.log("CHECKED  ", amount);
        //  let targetCheck: boolean = target.checked;

        if (amount == 0) {

            displayCart(name, price, 1);
        }
        else {
            displayCart(name, price, amount);
        }
    }


    // display Product    
    function displayProdctsCategories(_productCategories: ProductCategories): void {

        for (let categories in _productCategories) {
            let value: Products[] = _productCategories[categories];

            console.group("Kategorie " + categories);
            console.dir(value);
            console.groupEnd();
            console.log(categories + " categories");

            // let div: HTMLElement = document.getElementById("div[" + i + "]");
            //document.body.appendChild(div);
            let form: HTMLFormElement = document.createElement("form");
            let div0: HTMLDivElement = document.createElement("div");
            let div1: HTMLDivElement = document.createElement("div");
            form.setAttribute("id", "form");
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

    // NEW FUCNTI    
    function displayProducts(_categoryName: string, _anzahlInhalte: number): void {

        console.log("Name " + _categoryName + " Inhaltelaenge " + _anzahlInhalte);

        if (_categoryName == "Baumarten") {
            for (let i: number = 0; i < _anzahlInhalte; i++) {
                let nameForId: string = data[_categoryName][i].name + " Preis: " + data[_categoryName][i].price.toString();
                // fieldsets
                let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
                console.log("i Index " + i);

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
                    input.setAttribute("name", "rdiobutton");

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
                //                console.log("i Index " + i);

                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // legends
                for (let j: number = 0; j < data[_categoryName][i].color.length; j++) {
                    let input: HTMLInputElement = document.createElement("input");

                    document.getElementById(_categoryName).appendChild(input);
                    input.appendChild(document.createElement("br"));
                    input.setAttribute("type", data[_categoryName][i].inputType);
                    input.setAttribute("class", "inputs");
                    input.setAttribute("id", data[_categoryName][i].name + " " + j);
                    input.setAttribute("price", data[_categoryName][i].price.toString());
                    input.setAttribute("productName", data[_categoryName][i].name + " Farbe: " + data[_categoryName][i].color[j]);

                    let label: HTMLLabelElement = document.createElement("label");
                    label.setAttribute("id", data[_categoryName][i].name + " " + j);
                    label.innerText = data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);

                    if (data["Dekoration"][i].stepper == true) {
                        let stepper: HTMLInputElement = document.createElement("input");
                        document.getElementById("Dekoration").appendChild(stepper);
                        stepper.setAttribute("type", "number");
                        stepper.setAttribute("min", "0");
                        stepper.setAttribute("id", data[_categoryName][i].name + " " + j);    //nameForId + i.toString()
                    }
                }

            }




        }

    }





    function displayCart(_productName: string, _productPrice: number, _productAmount: number /*, _productChecked: boolean*/): void {
        //    let divCart: HTMLDivElement = document.createElement("div");
        //    divCart.innerHTML = ("Warenkorb");
        //    divCart.setAttribute("id", "Warenkorb");
        console.log("Produktname:  ", _productName);
        let list: HTMLElement = document.createElement("li");
        document.getElementById("cart").appendChild(list);
        console.log("displayCart:  " + _productName + "  " + _productPrice);
        //  if ( )
        if (_productAmount == 1) {
            list.innerHTML = _productName + "  Preis  " + _productPrice;
        } else {
            let newPrice: number = (_productPrice * _productAmount);
            console.log("NEW PRICE    ", newPrice);
            list.innerHTML = _productName + "  Preis  " + newPrice;

        }



    }


    //    function deleteCart(_event: Event): void {
    //        let div: HTMLElement = document.getElementById("cart");
    //        // div.innerHTML = ("leer");
    //        let titel: HTMLElement = document.createElement("h2");
    //        titel.innerHTML = "Warenkorb";
    //
    //        for (let i: number = 0; i < data["Baumarten"][0].name.length; i++) {
    //            let id: HTMLElement = document.getElementById("input1 " + i);
    //            if ( == true) {
    //
    //            }
    //
    //        }
    //
    //
    //    }










}