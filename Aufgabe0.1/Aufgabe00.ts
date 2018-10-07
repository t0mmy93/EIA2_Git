
namespace aufgabe0 {
    var name : string ="";
        
    function main() {
        var name: string = prompt("Gib deinen Namen ein");
        var node : any = document.getElementById("inhalt");
        node.innerHTML += "Moin ";
        node.innerHTML += name;
        node.innerHTML += ", schoenen Tag.";
        console.log("Moin " + name + ", schoenen Tag.");
       
    }

    
    
    
    document.addEventListener('DOMContentLoaded',main);
}
