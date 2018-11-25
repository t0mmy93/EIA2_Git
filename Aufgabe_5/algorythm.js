var Aufgabe_5;
(function (Aufgabe_5) {
    //   console.log(data["Dekoration"][0].color[0]);
    document.addEventListener("DOMContentLoaded", init);
    // console.log("1 " + data);
    function init(_event) {
        displayProdctsCategories(Aufgabe_5.data);
        document.addEventListener("click", handleClick);
    }
    //    console.log(Object.keys(data).length + " HALLO");
    //    function placeDiv(): void {
    //        for (let i: number = 0; i < Object.keys(data).length; i++) {
    //            let div: HTMLElement = document.createElement("div");
    //            div.setAttribute("id", "div[" + i + "]");
    //
    //            document.body.appendChild(div);
    //        }
    //    }
    // display Product    
    function displayProdctsCategories(_productCategories) {
        for (let categories in _productCategories) {
            let value = _productCategories[categories];
            //            placeDiv();
            console.group("Kategorie " + categories);
            console.dir(value);
            console.groupEnd();
            console.log(categories + " categories");
            // let div: HTMLElement = document.getElementById("div[" + i + "]");
            //document.body.appendChild(div);
            let div0 = document.createElement("div");
            let div1 = document.createElement("div");
            div0.innerHTML = ("Baumarten");
            div1.innerHTML = ("Dekoration");
            document.body.appendChild(div0);
            document.body.appendChild(div1);
            div0.setAttribute("id", "Baumarten");
            div1.setAttribute("id", "Dekoration");
            displayProducts(categories, value.length);
        }
    }
    // NEW FUCNTI    
    function displayProducts(_categoryName, _anzahlInhalte) {
        console.log("Name " + _categoryName + " Inhaltelaenge " + _anzahlInhalte);
        if (_categoryName == "Baumarten") {
            for (let i = 0; i < _anzahlInhalte; i++) {
                let nameForId = Aufgabe_5.data[_categoryName][i].name + " Preis: " + Aufgabe_5.data[_categoryName][i].price.toString();
                // fieldsets
                let fieldset = document.createElement("fieldset");
                console.log("i Index " + i);
                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // label / inputs
                for (let j = 0; j < Aufgabe_5.data[_categoryName][i].color.length; j++) {
                    let input = document.createElement("input");
                    document.getElementById(_categoryName).appendChild(input);
                    input.setAttribute("type", Aufgabe_5.data[_categoryName][i].inputType);
                    input.setAttribute("price", Aufgabe_5.data[_categoryName][i].price.toString());
                    input.setAttribute("productName", Aufgabe_5.data[_categoryName][i].name + " Groesse: " + Aufgabe_5.data[_categoryName][i].color[j]);
                    let label = document.createElement("label");
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
                console.log("i Index " + i);
                fieldset.innerText = nameForId;
                fieldset.setAttribute("id", nameForId);
                document.getElementById(_categoryName).appendChild(fieldset);
                // legends
                for (let j = 0; j < Aufgabe_5.data[_categoryName][i].color.length; j++) {
                    let input = document.createElement("input");
                    document.getElementById(_categoryName).appendChild(input);
                    input.appendChild(document.createElement("br"));
                    input.setAttribute("type", Aufgabe_5.data[_categoryName][i].inputType);
                    input.setAttribute("price", Aufgabe_5.data[_categoryName][i].price.toString());
                    input.setAttribute("productName", Aufgabe_5.data[_categoryName][i].name + " Farbe: " + Aufgabe_5.data[_categoryName][i].color[j]);
                    let label = document.createElement("label");
                    label.innerText = Aufgabe_5.data[_categoryName][i].color[j];
                    document.getElementById(_categoryName).appendChild(label);
                    if (Aufgabe_5.data["Dekoration"][i].stepper == true) {
                        let stepper = document.createElement("input");
                        document.getElementById("Dekoration").appendChild(stepper);
                        stepper.setAttribute("type", "number");
                        stepper.setAttribute("id", nameForId + j.toString());
                    }
                }
            }
        }
    }
    // ENDE NEW FUNCTION    
    function handleClick(_event) {
        let target = _event.target;
        //        if (target.tagName != "fieldset")
        //            alert(target.getAttribute("result"));
    }
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=algorythm.js.map