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

function searchCountryName() {
    var searchInput = document.getElementById("countryName");
    var countryName = searchInput.value.trim();

    // Create an array to store matching countries
    var matchingCountries = [];

    // Check for matches and add
    if (!countryName == "") {
        countryData.forEach(function (country) {
            if (country.toLowerCase().includes(countryName.toLowerCase())) {
                matchingCountries.push(country);
            }
        });
    }

    // Display alert
    if (matchingCountries.length > 0) {
        alert("Countries Found:\n" + matchingCountries.join("\n"));
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

// Function to search the currency code input
function searchCurrencyCode() {
    var currencyCodeInput = document.getElementById('currencyCode');
    var currencyCode = currencyCodeInput.value.trim();

    // Create an array to store matching country codes
    var matchingCurrencyCodes = [];

    // Check for matches and add
    if (!currencyCode == "") {

        currencyCodeData.forEach(function (code) {

            if (code.toLowerCase().includes(currencyCode.toLowerCase())) {
                matchingCurrencyCodes.push(code);
            }
        });
    }

    // Display alert
    if (matchingCurrencyCodes.length > 0) {
        alert("Countries Found:\n" + matchingCurrencyCodes.join("\n"));
    } else {
        alert("No matching countries found.");
    }

    /*
    // Check if the input is longer than 3 characters
    if (currencyCode.length > 3) {
        alert('Error: Currency code should be no more than 3 characters');
    }
    */
}

// Allow Enter key press to search country name
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('countryName').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchCountryName();
        }
    });
});

// Allow Enter key press to search currency code
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currencyCode').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchCurrencyCode();
        }
    });
});