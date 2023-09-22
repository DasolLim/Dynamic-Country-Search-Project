// Store country names and currency codes
var countryData = [];
var currencyCodeData = [];

// DOMContentLoaded process web contents and prevent 'undefined' contents 
document.addEventListener("DOMContentLoaded", function () {

    // Select all class name "country"
    var countryElements = document.querySelectorAll('.country');

    // Loop through the country elements
    countryElements.forEach(countryElement => {
        var nameElement = countryElement.querySelector('.name');
        var currencyElement = countryElement.querySelector('.currency');

        // Store found country name or currency code
        if (nameElement) {
            var name = nameElement.textContent.trim();

            // Push the extracted data into the countryData array
            countryData.push(name);
        }

        if (currencyElement) {
            var currency = currencyElement.textContent.trim();

            // Push the extracted data into the currencyCodeData array
            currencyCodeData.push(currency);
        }
    });

});

function searchDisplay(input) {
    // Create an array to store matching elements
    var matchingCountries = [];
    var matchingCurrencyCodes = [];

    // Check for matches and add
    if (!countryName == "") {
        for (let i = 0; i < 20; i++) {
            var country = countryData[i];
            var code = currencyCodeData[i];
            if (country.toLowerCase().includes(input.toLowerCase())) {
                matchingCountries.push(country);
                matchingCurrencyCodes.push(code);
            }

            // Ensure maximum 5 matches
            if (matchingCountries.length >= 5) {
                break;
            }
        }
    }

    // Display alert
    if (matchingCountries.length > 0) {
        var alertMessage = "";
        for (var i = 0; i < matchingCountries.length; i++) {
            alertMessage += "Country Found: " + matchingCountries[i] + "\n" + "Currency Found: " + matchingCurrencyCodes[i] + "\n\n";
        }
        alert(alertMessage);
    } else {
        alert("No matching countries found.");
    }

    /*
    // Check if the input is longer than 20 characters
    if (countryName.length > 20) {
        alert('Error: Country name should be no more than 20 characters');
    }
    */
}

// Function to search the country name input
function searchCountryName() {
    var countryNameInput = document.getElementById("countryName").value.trim();
    searchDisplay(countryNameInput);
}

// Function to search the currency code input
function searchCurrencyCode() {
    var currencyCodeInput = document.getElementById('currencyCode').value.trim();
    searchDisplay(currencyCodeInput);
}

// Allow ENTER key press to search country name
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('countryName').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchCountryName();
        }
    });
});

// Allow ENTER key press to search currency code
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currencyCode').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchCurrencyCode();
        }
    });
});