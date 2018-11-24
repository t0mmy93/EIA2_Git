namespace Aufgabe_5 {

    export interface Products {
        name: string;
        price: number;
        color: string[];
        inputType: string;
    }

    export interface ProductCategories {
        [category: string]: Products[];
    }

    export let data: ProductCategories = {

        "Dekoration": [
            { name: "Kerzen", price: 0.99, color: ["rot", "blau", "gold", "Supreme", "Gucci"], inputType: "checkbox"},
            { name: "Baum-Kugeln", price: 1.99, color: ["rot", "blau", "gold", "Supreme", "Gucci"], inputType: "checkbox"},
            { name: "Lichterketten", price: 1.99, color: ["3m", "6m", "10m", "Prada", "VVS"], inputType: "checkbox"},
            { name: "Engel", price: 14.99, color: ["Schlank", "Fett"], inputType: "radio"},
            { name: "Stern", price: 14.99, color: ["Einheitsgroesse"], inputType: "radio"},
            { name: "Supreme-Logo", price: 154.99, color: ["Einheitsgroesse"], inputType: "radio"},
            { name: "Gucii-Logo", price: 229.99, color: ["Einheitsgroesse"], inputType: "radio"},
            { name: "VVS-Logo", price: 449.99, color: ["Einheitsgroesse"], inputType: "radio"}

        ],
        "Baumarten": [
            { name: "Nordmantanne", price: 34.99, color: ["klein", "mittel", "gross"], inputType: "radio"},
            { name: "Fichte", price: 24.99, color: ["klein", "mittel", "gross"], inputType: "radio"},
            { name: "Rotfichte", price: 29.99, color: ["klein", "mittel", "gross"], inputType: "radio"},
            { name: "VVS", price: 349.99, color: ["klein", "mittel", "gross"], inputType: "radio"}
        ]
    };



}