
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', './current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let promise = new Promise((resolve, reject) => {
        request.onload = () => resolve(request.responseText);
        request.onerror = () => reject(request.statusText);
        request.send();
    });

    promise
        .then(()=>{
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(()=>inputUsd.value = "Что-то пошло не так!");
});