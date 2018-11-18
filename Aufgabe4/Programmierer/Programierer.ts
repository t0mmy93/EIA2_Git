///<reference path='Haendler.ts' />

namespace Haendler {
    document.addEventListener("DOMContentLoaded", init);




    let trees: string[] = ["Nordmanntanne", "Rotfichte", "Fichte", "Gucci-Fichte"];
    let treesPrice: number[] = [34.99, 29.99, 19.99, 349.99];
    let balls: string[] = ["Kugel rot", "Kugel blau", "Kugel gold", "Kugel Supreme"];
    let ballsPrice: number[] = [4.99, 9.99, 3.99, 129.99];
    let candles: string[] = ["Kerze rot", "Kerze blau", "Kerze gold", "Kerze VVS"];
    let candlesPrice: number[] = [2.99, 2.99, 3.99, 49.99];
    let lightstring: string[] = ["Lichterkette 3m", "Lichterkette 6m", "Lichterkette 10m", "Lichterkette Prada"];
    let lightstringPrice: number[] = [19.99, 24.99, 29.99, 149.99];
    let peak: string[] = ["Egel", "Stern", "Supreme", "Gucci"];
    let peakPrice: number[] = [14.99, 129.99, 199.99, 249.99];
    let shoppingCartName: string[] = [];
    let shoppingCartPrice: number[] = [];
    //    let fieldset: HTMLFieldSetElement;
    //    let inputTree: HTMLInputElement[] = [];
    //    let inputBalls: HTMLInputElement[] = [];
    //    let inputCandle: HTMLInputElement[] = [];
    //    let inputLight: HTMLInputElement[] = [];
    //    let inputPeak: HTMLInputElement[] = [];









    function init(): void {
        radioButton();
        createInput();
        createFirstStepper();
        createThirdStepper();
        createRadioButtonPeak();
        createRadioButtonLight();
        createRadioButtonTree();


        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> =
            document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }





    /* Funktion zum löschen der Array Elemente welche zu vor angewählt waren 
        function cutShoppingCar(): void {
    
            for (let i: number = 0, i < trees.lenght, i++) {
    
                let baum: string = shoppingCartName.indexOf(tree[i].name);
                if (baum <= 0) {
                    shopingCartName.splice(baum, 1);
                }
        }
        */





    function handleChange(_event: Event): void {
        //  console.log(_event);
        //*/

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler


        // eventuell switch case______
        let id: string = this.id;
        switch (id) {
            // PEAK
            // zum raus schneiben aus dem Array einen wert mit geben welcher vor dem Name Preis steht zb "1" dadurch kann man
            // mit indexof ein
            // nach dem wert suchen und ihn und das folge Objekt löschen 
            case "fieldsetRadio1": {
                shoppingCartName.push(peak[0]);
                shoppingCartPrice.push(peakPrice[0]);
                console.log(shoppingCartName, shoppingCartPrice);

                break;
            }

            /*    else {
                    let indexName: number = shoppingCartName.indexOf(trees[0]);
                    let indexPrice: number = shoppingCartName.indexOf(treesPrice[0]);
                    if (ind <= 0) {
                        shoppingCartName.splice(indexName, i);
                        shoppingCartPrice.splice(indexPrice, i); // es ist möglich falls der preis zweimal vorhandne ist 
                // das man den flachen entfernt
                    }*/

            case "fieldsetRadio2": {
                shoppingCartName.push(peak[1]);
                shoppingCartPrice.push(peakPrice[1]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio3": {
                shoppingCartName.push(peak[2]);
                shoppingCartPrice.push(peakPrice[2]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio4": {
                shoppingCartName.push(peak[3]);
                shoppingCartPrice.push(peakPrice[3]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio5": {
                // function zum entfernen des Produkts
                break;
            }
            // PEAK ENDE
            // LCIHTERKETTE
            case "fieldsetRadio6": {
                shoppingCartName.push(lightstring[1]);
                shoppingCartPrice.push(lightstringPrice[1]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio7": {
                shoppingCartName.push(lightstring[2]);
                shoppingCartPrice.push(lightstringPrice[2]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio8": {
                shoppingCartName.push(lightstring[3]);
                shoppingCartPrice.push(lightstringPrice[3]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio9": {
                shoppingCartName.push(lightstring[3]);
                shoppingCartPrice.push(lightstringPrice[3]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio10": {
                // function zum entfernen des Produkts
                break;
            }
            // LICHTERKETTE ENDE
            //BAUM
            case "fieldsetRadio11": {
                shoppingCartName.push(trees[0]);
                shoppingCartPrice.push(treesPrice[0]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio12": {
                shoppingCartName.push(trees[1]);
                shoppingCartPrice.push(treesPrice[1]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio13": {
                shoppingCartName.push(trees[2]);
                shoppingCartPrice.push(treesPrice[2]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            case "fieldsetRadio14": {
                shoppingCartName.push(trees[3]);
                shoppingCartPrice.push(treesPrice[3]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
            // ENDE BAUM
            case "fieldsetCandles1": {
                shoppingCartName.push(trees[3]);
                shoppingCartPrice.push(treesPrice[3]);
                console.log(shoppingCartName, shoppingCartPrice);
                break;
            }
        }
    }


    /*  if (target.name == "fieldsetBalls") {
          let meter: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
          meter.value = parseFloat(target.value);
          console.log(target.value);
      } 
    if (target.name == "kugel_rot") {
    
        let anzahl: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("anzahl");
        anzahl.value = parseFloat(target.value);
        console.log(anzahl);
    
    
    }
    */







    function createInput(): Node {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        //    let legend: HTMLLegendElement = document.createElement("legend");
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "30";
        input.step = "2";
        input.value = "0";
        return input;
    }

    function createFirstStepper(): void {

        let ballsStepperRot: Node = createInput();
        let rot: HTMLElement = document.getElementById("kugel_rot");
        rot.appendChild(ballsStepperRot);

        let ballsStepperBlau: Node = createInput();
        let weis: HTMLElement = document.getElementById("kugel_blau");
        weis.appendChild(ballsStepperBlau);


        let ballsStepperGold: Node = createInput();
        let gold: HTMLElement = document.getElementById("kugel_gold");
        gold.appendChild(ballsStepperGold);

        let ballsStepperSupreme: Node = createInput();
        let supreme: HTMLElement = document.getElementById("kugel_supreme");
        supreme.appendChild(ballsStepperSupreme);
    }



    function createThirdStepper(): void {
        let stepperCandles1: Node = createInput();
        let red: HTMLElement = document.getElementById("fieldsetCandles1");
        red.appendChild(stepperCandles1);

        let stepperCandles2: Node = createInput();
        let blue: HTMLElement = document.getElementById("fieldsetCandles2");
        blue.appendChild(stepperCandles2);

        let stepperCandles3: Node = createInput();
        let gold: HTMLElement = document.getElementById("fieldsetCandles3");
        gold.appendChild(stepperCandles3);

        let stepperCandles4: Node = createInput();
        let vvs: HTMLElement = document.getElementById("fieldsetCandles4");
        vvs.appendChild(stepperCandles4);
    }


    function radioButton(): Node {

        let input: HTMLInputElement = document.createElement("input");
        input.type = "radio";
        input.required = true;
        input.name = "container";
        return input;

    }
    function createRadioButtonPeak(): void {
        let radio1: Node = radioButton();
        let engel: HTMLElement = document.getElementById("fieldsetRadio1");
        engel.appendChild(radio1);

        let radio2: Node = radioButton();
        let stern: HTMLElement = document.getElementById("fieldsetRadio2");
        stern.appendChild(radio2);

        let radio3: Node = radioButton();
        let supreme: HTMLElement = document.getElementById("fieldsetRadio3");
        supreme.appendChild(radio3);

        let radio4: Node = radioButton();
        let gucci: HTMLElement = document.getElementById("fieldsetRadio4");
        gucci.appendChild(radio4);

        let radio5: Node = radioButton();
        let noProduct: HTMLElement = document.getElementById("fieldsetRadio5");
        noProduct.appendChild(radio5);
    }

    function createRadioButtonLight(): void {
        let radio1: Node = radioButton();
        let lk3m: HTMLElement = document.getElementById("fieldsetRadio6");
        lk3m.appendChild(radio1);

        let radio2: Node = radioButton();
        let lk6m: HTMLElement = document.getElementById("fieldsetRadio7");
        lk6m.appendChild(radio2);

        let radio3: Node = radioButton();
        let lk10m: HTMLElement = document.getElementById("fieldsetRadio8");
        lk10m.appendChild(radio3);

        let radio4: Node = radioButton();
        let prada: HTMLElement = document.getElementById("fieldsetRadio9");
        prada.appendChild(radio4);

        let radio5: Node = radioButton();
        let noProduct: HTMLElement = document.getElementById("fieldsetRadio10");
        noProduct.appendChild(radio5);
    }

    function createRadioButtonTree(): void {
        let radio1: Node = radioButton();
        let nordmanntanne: HTMLElement = document.getElementById("fieldsetRadio11");
        nordmanntanne.appendChild(radio1);

        let radio2: Node = radioButton();
        let rotFichte: HTMLElement = document.getElementById("fieldsetRadio12");
        rotFichte.appendChild(radio2);

        let radio3: Node = radioButton();
        let fichte: HTMLElement = document.getElementById("fieldsetRadio13");
        fichte.appendChild(radio3);

        let radio4: Node = radioButton();
        let supreme: HTMLElement = document.getElementById("fieldsetRadio14");
        supreme.appendChild(radio4);




    }
}