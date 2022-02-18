console.log("here")

let words_select = document.getElementById("words")
let btn = document.getElementById("btn")
let result_div = document.getElementById("result")

btn.addEventListener("click", generovat)

function generovat() {
    let words_count = parseInt(words_select.value)
    result_div.innerHTML = "vybral jsi " + String(words_count) + " slov."
}