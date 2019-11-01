
let inputRub = document.getElementById("rub"),
    inputUsd = document.getElementById("usd"),
    url = "./current.json";

inputRub.addEventListener("input", ()=>{
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET', url);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener("readystatechange", function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUsd.value = (inputRub.value / data.usd).toFixed(2);
        } else {
            inputUsd.value = "Thomething wrong";
        }
    });

});

