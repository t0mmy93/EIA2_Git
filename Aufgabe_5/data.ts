namespace Aufgabe_5 {
    export let cart: string[] = [];
    export interface Products {
        name: string;
        price: number;
        color: string[];
        inputType: string;
        stepper: boolean;
    }

    export interface ProductCategories {
        [category: string]: Products[];
    }

    export let data: ProductCategories = {

        
        "Baumarten": [
            { name: "Nordmantanne", price: 34.99, color: ["klein", "mittel", "gross"], inputType: "radio", stepper: false },
            { name: "Fichte", price: 24.99, color: ["klein", "mittel", "gross"], inputType: "radio", stepper: false },
            { name: "Rotfichte", price: 29.99, color: ["klein", "mittel", "gross"], inputType: "radio", stepper: false },
            { name: "VVS", price: 349.99, color: ["klein", "mittel", "gross"], inputType: "radio", stepper: false }
        ],
        "Dekoration": [
            { name: "Kerzen", price: 0.99, color: ["rot", "blau", "gold", "Supreme", "Gucci"], inputType: "checkbox", stepper: true },
            { name: "Baum-Kugeln", price: 1.99, color: ["rot", "blau", "gold", "Supreme", "Gucci"], inputType: "checkbox", stepper: true },
            { name: "Lichterketten", price: 19.99, color: ["3m", "6m", "10m", "Prada", "VVS"], inputType: "radio", stepper: false },
            { name: "Engel", price: 14.99, color: ["Schlank", "Fett"], inputType: "radio", stepper: false },
            { name: "Stern", price: 14.99, color: ["Einheitsgroesse"], inputType: "radio", stepper: false },
            { name: "Supreme-Logo", price: 154.99, color: ["Einheitsgroesse"], inputType: "radio", stepper: false },
            { name: "Gucii-Logo", price: 229.99, color: ["Einheitsgroesse"], inputType: "radio", stepper: false },
            { name: "VVS-Logo", price: 449.99, color: ["Einheitsgroesse"], inputType: "radio", stepper: false }

        ]
    };



}