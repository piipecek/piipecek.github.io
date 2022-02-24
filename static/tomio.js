function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

console.log("here")

let words_select = document.getElementById("words")
let btn = document.getElementById("btn")
let result_div = document.getElementById("result")

btn.addEventListener("click", generovat)

function generovat() {
    let words_count = parseInt(words_select.value)
    let result = httpGet("//www.piipovostranky.cz/visuals/tomiem_ipsum/" + String(words_count))
    //let result = httpGet("http://127.0.0.1:3000/visuals/tomiem_ipsum/" + String(words_count))
    result_div.innerHTML = result
}