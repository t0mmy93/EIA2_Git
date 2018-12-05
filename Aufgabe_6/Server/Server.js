"use strict";
const Http = require("http"); // import als Http von http, es wird die node.js datei importiert 
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    let port = process.env.PORT; // let port wird der Port von Heroku zugewiesen
    if (port == undefined)
        port = 8100; // ist der Portwert 8100
    let server = Http.createServer(); // let server wird als Http.server deklariert mit der Method wird ein lokaler Server auf dem Ger�t erzeugt
    server.addListener("request", handleRequest); // ein evetnlistener welcher bei "request" ausgel�st wird und danach die handleRequest function ausf�hrt 
    server.addListener("listening", handleListen); // eventlistener welcher die function handleListen so lange ausf�hrt wie der Nutzer darauf zu greift 
    server.listen(port); // der Serve h�rt auf den vorher zugewiesenen Port 
    function handleListen() {
        console.log("Listening"); // aus gabe von Listening in de Console
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // ausgabe in der Console
        console.log(_request.url); // ausgabe in der Console
        _response.setHeader("content-type", "text/html; charset=utf-8"); // _response setzt in der Headerdatei  "content-type" und charset UTF-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Acces.Control-Allow-Origin wird auch in den Header gesetzt, der Befehl teilt die Antwort des Servers mit dem Quellcode
        _response.write(_request.url); // _response.write greift auf die _request-url zu 
        _response.end(); // response wird beendet
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map