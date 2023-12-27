const convertButton = document.querySelector('.convertButton')
const convertCurrencySelect = document.querySelector('.convertCurrencySelect')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value

    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const euroToday = 5.39
    const dolarToday = 4.89
    const libraToday = 6.21
    const bitcoin = 208522.22

    if (convertCurrencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (convertCurrencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (convertCurrencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (convertCurrencySelect.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoin)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if (convertCurrencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/dolar.png'
    }

    if (convertCurrencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    if (convertCurrencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImg.src = './assets/libra.png'
    }

    if (convertCurrencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }
    convertValues()
}


convertCurrencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)