namespace Aufgabe_5 {

    document.addEventListener("DOMContentLoaded", init);

    function init(_event: Event): void {
        console.log(data);
        displayProdctsCategories(data);
        document.addEventListener("click", handleClick);
    }

    console.log(Object.name);
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
            console.group(categories);
            console.dir(value);
            console.groupEnd();

            
            for (let i: number = 0; i < value.length; i++) {
                //        let div: HTMLElement = document.createElement("div");
                //     div.setAttribute("id", "div" + (Object.keys(data).lenght));
                let div2: HTMLElement = document.getElementById("div[" + i + "]");
                div2.innerText = (categories.toString());
                document.body.appendChild(div2);
                displayProducts(value[i], categories, div2.toString());
            }
        }
    }

    function displayProducts(_products: Products, _categoryName: string, _divName: string): void {
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        //   let input: HTMLFieldSetElement = document.createElement("input");
        let legend: HTMLLegendElement = document.createElement("legend");
        let inputType: string = _products.inputType;
        legend.innerText = _products.name.toString();
        fieldset.setAttribute("type", inputType);
        fieldset.setAttribute("price", _products.price.toString());
        fieldset.appendChild(legend);
        
        document.getElementById("div[0]").appendChild(fieldset);
    }

    function handleClick(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.tagName != "fieldset")
            alert(target.getAttribute("result"));
    }
















}



