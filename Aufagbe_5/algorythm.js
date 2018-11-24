var Aufgabe_5;
(function (Aufgabe_5) {
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        console.log(Aufgabe_5.data);
        displayProdctsCategories(Aufgabe_5.data);
        document.addEventListener("click", handleClick);
    }
    console.log(Object.name);
    function placeDiv() {
        for (let i = 0; i < Object.keys(Aufgabe_5.data).length; i++) {
            let div = document.createElement("div");
            div.setAttribute("id", "div[" + i + "]");
            document.body.appendChild(div);
        }
    }
    // display Product    
    function displayProdctsCategories(_productCategories) {
        for (let categories in _productCategories) {
            let value = _productCategories[categories];
            placeDiv();
            console.group(categories);
            console.dir(value);
            console.groupEnd();
            for (let i = 0; i < value.length; i++) {
                //        let div: HTMLElement = document.createElement("div");
                //     div.setAttribute("id", "div" + (Object.keys(data).lenght));
                let div2 = document.getElementById("div[" + i + "]");
                div2.innerText = (categories.toString());
                document.body.appendChild(div2);
                displayProducts(value[i], categories, div2.toString());
            }
        }
    }
    function displayProducts(_products, _categoryName, _divName) {
        let fieldset = document.createElement("fieldset");
        //   let input: HTMLFieldSetElement = document.createElement("input");
        let legend = document.createElement("legend");
        let inputType = _products.inputType;
        legend.innerText = _products.name.toString();
        fieldset.setAttribute("type", inputType);
        fieldset.setAttribute("price", _products.price.toString());
        fieldset.appendChild(legend);
        document.getElementById("div[0]").appendChild(fieldset);
    }
    function handleClick(_event) {
        let target = _event.target;
        if (target.tagName != "fieldset")
            alert(target.getAttribute("result"));
    }
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=algorythm.js.map