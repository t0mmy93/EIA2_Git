import * as Http from "http";   // import als Http von http, es wird die node.js datei importiert 

namespace L06_SendData {
    console.log("Starting server");
    let port: number = process.env.PORT;    // let port wird der Port von Heroku zugewiesen
    if (port == undefined)                  // wenn der Port nicht gefunden wird 
        port = 8100;                        // ist der Portwert 8100

    let server: Http.Server = Http.createServer();  // let server wird als Http.server deklariert mit der Method wird ein lokaler Server auf dem Gerät erzeugt
    server.addListener("request", handleRequest); // ein evetnlistener welcher bei "request" ausgelöst wird und danach die handleRequest function ausführt 
    server.addListener("listening", handleListen); // eventlistener welcher die function handleListen so lange ausführt wie der Nutzer darauf zu greift 
    server.listen(port);        // der Serve hört auf den vorher zugewiesenen Port 

    function handleListen(): void {
        console.log("Listening"); // aus gabe von Listening in de Console
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  // der function werden Http.IncomingMessage und Http.ServerResponse übergeben
        console.log("I hear voices!"); // ausgabe in der Console
        console.log(_request.url); // ausgabe in der Console

        _response.setHeader("content-type", "text/html; charset=utf-8");  // _response setzt in der Headerdatei  "content-type" und charset UTF-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Acces.Control-Allow-Origin wird auch in den Header gesetzt, der Befehl teilt die Antwort des Servers mit dem Quellcode

        _response.write(_request.url); // _response.write greift auf die _request-url zu 

        _response.end(); // response wird beendet
    }
}