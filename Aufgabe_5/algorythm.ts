namespace Aufgabe_5 {

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
            console.group("1" + categories);
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
                displayProducts(value[i], categories);
        }
    }

    function displayProducts(_products: Products, _categoryName: string): void {

        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let input: HTMLFieldSetElement = document.createElement("input");
        let legend: HTMLLegendElement = document.createElement("legend");
        let label: HTMLLabelElement = document.createElement("label");

        label.setAttribute = ("id", _products.name.toString);
        fieldset.setAttribute("price", _products.price.toString());
        fieldset.setAttribute("id", _products.name.toString());
        fieldset.appendChild(legend);

        if (_categoryName == "Dekoration") {
            document.getElementById("div[0]").appendChild(fieldset);
            //  document.getElementById("div[0]").innerHTML += (_categoryName);

            for (let i: number = 0; i < _categoryName.length; i++)
                label.innerText = _products.color[i];
            input.setAttribute("type", _products.inputType);
            //  console.log(_products.color[i]);
        }
        else document.getElementById("div[1]").appendChild(fieldset);
        legend.innerText = _products.name.toString();
    }

    function handleClick(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.tagName != "fieldset")
            alert(target.getAttribute("result"));
    }



}



