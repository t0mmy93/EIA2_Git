namespace DatabaseClient {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress: string = "https://freshdatabase.herokuapp.com/";

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let suche: HTMLButtonElement = <HTMLButtonElement>document.getElementById("suche");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        suche.addEventListener("click", find);
    }

    function find(_event: Event): void {
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("MN");
        console.log("INPUT: ");
        let url: string = "command=search" + "&" + "matrikel" + "=" + input.value;
        sendRequest(url, handleFindResponse);
    }


    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        console.log("SEND: " + xhr);
        xhr.send();

    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        // console.log("XHR: " + xhr);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            console.log("response" + xhr.response);
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log("response: " + responseAsJson);
        }
    }
}