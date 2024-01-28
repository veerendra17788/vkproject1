let spinnerEl = document.getElementById("spinner");
let timerEl = document.getElementById("timer");
let quotesEl = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
// hjg
let counter = 0;
spinnerEl.classList.toggle("d-none");

function count() {
    counter += 1;
    timerEl.textContent = counter;
}

let counterVal = setInterval(count, 1000);

function getQuotation() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET",
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            spinnerEl.classList.add("d-none");
            let quote = jsondata.content;
            quotesEl.textContent = quote;
        })

}

getQuotation();
count();

resetBtn.onclick = function() {
    spinnerEl.classList.remove("d-none");
    getQuotation();
    count();
    counter = 0;
    result.textContent = "";
    quoteInputEl.value = "";
};

submitBtn.onclick = function() {
    if (quotesEl.textContent === quoteInputEl.value) {
        clearInterval(counterVal);
        result.textContent = "You typed in " + counter + " seconds";
    } else {
        result.textContent = "You mistyped!";
    }
};