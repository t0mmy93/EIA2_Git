
namespace aufgabe0 {
    
        
    function main(): void {
        var name: string = prompt("Gib deinen Namen ein");
        var node: HTMLElement = document.getElementById("inhalt");
        node.innerHTML += "Moin ";
        node.innerHTML += name;
        node.innerHTML += ", ich wuensche die einen schoenen Tag.";
        console.log("Moin " + name + ", ich wuensche die einen schoenen Tag.");
        
       
    }

    
    
    
    document.addEventListener('DOMContentLoaded',main);
}
