var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress = "https://freshdatabase.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let search = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        search.addEventListener("click", find);
    }
    //    function find(_event: Event): void {
    //        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("MN");
    //       
    //        let url: string = "command=search" + "&" + "matrikel" + "=" + input.value;
    //        
    //        sendRequest(url, handleFesponse);
    //    }
    function find(_event) {
        let search = document.getElementById("number");
        let query = "command=find";
        query += "&matrikel=" + search.value;
        console.log(query);
        sendRequest(query, handleFindResponse);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        console.log("SEND: " + xhr);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        // console.log("XHR: " + xhr);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            console.log("response" + xhr.response);
            let responseAsJson = JSON.parse(xhr.response);
            console.log("response: " + responseAsJson);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map