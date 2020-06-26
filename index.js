const inputAmount = document.getElementById("amount");
const convertFromCurrency = document.getElementById("convertFrom");
const convertToCurrency = document.getElementById("convertTo");
const convertCurrencyButton = document.getElementById("convert-button");
const convertedCurrency = document.getElementById("result");
convertCurrencyButton.addEventListener("click", calculate);
inputAmount.addEventListener("input", calculate);

function calculate() {

    const apiUrl = "http://apilayer.net/api/live?access_key=7dec7d90e81209854675ca2e03839940&currencies=EUR,CHF,CAD,PLN&source=USD&format=1";
    console.log(apiUrl);
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let exchangeRateInEuro = data.quotes.USDEUR;
            let exchangeRateInFranc = data.quotes.USDCHF;
            if (convertFromCurrency.value == "Usd" && convertToCurrency.value == "Euro") {
                let amountInEuro = Math.round(parseFloat(inputAmount.value * exchangeRateInEuro));
                convertedCurrency.textContent = `${inputAmount.value} USD = ${amountInEuro} Euro`;
            } else if (convertFromCurrency.value == "Usd" && convertToCurrency.value == "Chf") {
                let amountInFranc = Math.round(parseFloat(inputAmount.value * exchangeRateInFranc));
                convertedCurrency.textContent = `${inputAmount.value} USD = ${amountInFranc}Fr`;
            }

        });
};