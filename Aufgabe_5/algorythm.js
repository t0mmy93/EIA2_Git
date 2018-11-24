var Aufgabe_5;
(function (Aufgabe_5) {
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        console.log(Aufgabe_5.data);
        displayProdctsCategories(Aufgabe_5.data);
        document.addEventListener("click", handleClick);
    }
    console.log(Object.keys(Aufgabe_5.data).length);
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
            console.group("1" + categories);
            console.dir(value.length);
            console.groupEnd();
            for (let i = 0; i < 2; i++) {
                let div = document.getElementById("div[" + i + "]");
                document.body.appendChild(div);
                let div0 = document.getElementById("div[0]");
                let div1 = document.getElementById("div[1]");
                div0.innerHTML = ("Dekoration");
                div1.innerHTML = ("Baumarten");
            }
            for (let i = 0; i < value.length; i++)
                displayProducts(value[i], categories);
        }
    }
    function displayProducts(_products, _categoryName) {
        let fieldset = document.createElement("fieldset");
        let input = document.createElement("input");
        let legend = document.createElement("legend");
        let label = document.createElement("label");
        label.setAttribute = ("id", _products.name.toString);
        fieldset.setAttribute("price", _products.price.toString());
        fieldset.setAttribute("id", _products.name.toString());
        fieldset.appendChild(legend);
        if (_categoryName == "Dekoration") {
            document.getElementById("div[0]").appendChild(fieldset);
            //  document.getElementById("div[0]").innerHTML += (_categoryName);
            for (let i = 0; i < _categoryName.length; i++)
                label.innerText = _products.color[i];
            input.setAttribute("type", _products.inputType);
        }
        else
            document.getElementById("div[1]").appendChild(fieldset);
        legend.innerText = _products.name.toString();
    }
    function handleClick(_event) {
        let target = _event.target;
        if (target.tagName != "fieldset")
            alert(target.getAttribute("result"));
    }
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=algorythm.js.map