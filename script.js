// This is the link of API
let api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;
 
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// Create dropdown from the currency array
currencies.forEach( (currency) => {
    const option = document.createElement("option"); // It create a option element
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

// For another option 
currencies.forEach( (currency) => {
    const option = document.createElement("option");   // It create a option element
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});


// Setting same thing for the other dropdown.
fromDropDown.value = "USD";
toDropDown.value = "INR";


let ConvertCurrency = () => {

    // create referance 
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;
        
    // If amount input field is not empty 
    if(amount.length != 0){
        // alert("Okay");
        fetch(api)
        .then(resp => resp.json())
        .then((data) => {
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];

            const  convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency} `;
        }); 
    }else{
        alert("Please enter the amount .");
    }
};

document.querySelector("#converter-button").addEventListener("click",ConvertCurrency);
window.addEventListener("load",ConvertCurrency);






