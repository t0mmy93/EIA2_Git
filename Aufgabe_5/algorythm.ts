namespace Aufgabe_5 {
    //   console.log(data["Dekoration"][0].color[0]);
    document.addEventListener("DOMContentLoaded", init);

    function init(_event: Event): void {
        console.log(data);
        displayProdctsCategories(data);
        document.addEventListener("click", handleClick);
    }

    console.log(Object.keys(data).length);
    function placeDiv(): void {
        for (let i: number = 0; i < Object.keys(data).length; i++) {
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("id", "div[" + i + "]");

            document.body.appendChild(div);
        }
    }




    // display Product    
    function displayProdctsCategories(_productCategories: ProductCategories): void {

        for (let categories in _productCategories) {
            let value: Products[] = _productCategories[categories];
            placeDiv();

            console.group("Kategorie" + categories);
            console.dir(value.length);
            console.groupEnd();

            for (let i: number = 0; i < 2; i++) {
                let div: HTMLElement = document.getElementById("div[" + i + "]");
                document.body.appendChild(div);
                let div0: HTMLElement = document.getElementById("div[0]");
                let div1: HTMLElement = document.getElementById("div[1]");
                div0.innerHTML = ("Dekoration");
                div1.innerHTML = ("Baumarten");
            }
            for (let i: number = 0; i < value.length; i++)
                displayProducts(value[i], categories, value.length);
        }
    }






    function displayProducts(_products: Products, _categoryName: string, _value: number): void {
        //  console.log("gg", _value );
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        /*
                function getColors(_dekorationIndex: number): void {
                    for (let i: number = 0; i < data["Dekoration"][_dekorationIndex].color[i].length; i++) {
                        let colorName: string = data["Dekoration"][_dekorationIndex].color[i];
                        console.log("color " + data["Dekoration"][_dekorationIndex].color[i].length);
                        label.innerText = colorName;
                    }
                    
          }
             
           function getColors2(_arrayNumber: number): void {
        for (let j: number = 0; j < data["Dekoration"][_arrayNumber].name.length; j++) { // 2
            label.innerText = data["Dekoration"][_arrayNumber].color[1];
            label.appendChild(document.createElement("br"));

            label.setAttribute("type", _products.inputType);
            label.setAttribute("id", _products.color.toString());
            document.getElementById(data["Dekoration"][_arrayNumber].name + " legend").appendChild(label);
        }
    }
        
        */
        function getColors2(_arrayIndex: number): void {
            //    console.log(_arrayIndex + "ARAAYNUMMER");
            for (let i: number = 0; i < data["Dekoration"][_arrayIndex].color.length; i++) {
                console.log(data["Dekoration"][_arrayIndex].color[0] + " FARBE");
                label.innerText = data["Dekoration"][_arrayIndex].color[i];
                label.appendChild(document.createElement("br"));
                label.setAttribute("type", _products.inputType);
                label.setAttribute("id", _products.color.toString());
                document.getElementById(data["Dekoration"][_arrayIndex].name + " legend").appendChild(label);
            }
        }



        if (_categoryName == "Dekoration") {

            console.log(_products.name, "cecec");
            input.classList.add("class", _products.name);
            input.classList.add("formelements");
            input.setAttribute("type", _products.inputType);

            fieldset.setAttribute("id", _products.name + " fieldset");
            document.getElementById("div[0]").appendChild(fieldset);

            legend.innerText = _products.name.toString();
            legend.appendChild(document.createElement("br"));
            legend.setAttribute("id", _products.name + " legend");

            document.getElementById(_products.name + " fieldset").appendChild(legend);
            input.setAttribute("id", _products.name + " input");
            document.getElementById(_products.name + " legend").appendChild(input);

            for (let i: number = 0; i < data["Dekoration"].length; i++) {       // 1 
                //      console.log(data["Dekoration"].length + " Dekoration laenge");
                getColors2(0);
                //            getColors2(0);
                //            getColors2(1);
                //            getColors2(2);
                //            getColors2(3);
                //            getColors2(4);
                //            getColors2(5);
                //            getColors2(6);
                //            getColors2(7);




            }
        }


        else {

            input.classList.add("class", _products.name);
            input.classList.add("formelements");
            input.setAttribute("type", _products.inputType);
            fieldset.setAttribute("id", _products.name);
            document.getElementById("div[0]").appendChild(fieldset);
            legend.innerText = _products.name.toString();
            document.getElementById(_products.name).appendChild(legend);

            document.getElementById(_products.name).appendChild(input);


            fieldset.innerText = _products.name.toString();
            for (let i: number = 0; i < _value; i++) {
                let color: string = _products.color[i];
                label.innerText = color;
                label.setAttribute("type", _products.inputType);
                document.getElementById(_products.name).appendChild(label);
                label.appendChild(document.createElement("br"));
            }

        }
        //   }

    }
    //        else
    //
    //    document.getElementById("div[1]").appendChild(fieldset);
    //    legend.innerText = _products.name.toString();
    //    document.getElementsByClassName("legend");
    //    legend.appendChild(label);

    //}

    function handleClick(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.tagName != "fieldset")
            alert(target.getAttribute("result"));
    }



}
/*
Cut fucntion noch abändern

  function getIndex(_itemName: string, _arrayWarenkorb: string[], _arrayToSearch: string[]): void {
        let index: number = _arrayWarenkorb.indexOf(_itemName);      // z.b 2
        // console.log(index);
        if (index == -1) {
            console.log("Produkt ist nicht vorhanden.");
        } else {
            for (let i: number = 0; i < _arrayToSearch.length; i++) {
                let itemToCut: string = _arrayToSearch[i];
                let cutIndex: number = _arrayWarenkorb.indexOf(itemToCut);
                if (cutIndex != -1) {
                    _arrayWarenkorb.splice(cutIndex, 1);
                } else {
                    console.log("das Produkt ist nicht im Warenkorb.");
                }
            }
        }
        shoppingCartName.push(_itemName);
        //    console.log(shoppingCartName);
    }
*/


//function displayCart(_cartInfo: string):void {
//
//
//}

