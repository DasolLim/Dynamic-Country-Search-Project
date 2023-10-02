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

function toggleContainerVisibility(visible) {
    var container = document.querySelector('.container');
    container.style.display = visible ? "block" : "none";
}

function searchDisplay(input, isCurrencySearch) {
    // Create an array to store matching elements
    var matchingCountries = [];
    var matchingCurrencyCodes = [];

    // Check for matches and add
    if (!input == "") {
        for (let i = 0; i < countryData.length; i++) {
            var country = countryData[i];
            var code = currencyCodeData[i];

            if (isCurrencySearch && code.toLowerCase().includes(input.toLowerCase())) {
                matchingCountries.push(country);
                matchingCurrencyCodes.push(code);
            } else if (!isCurrencySearch && country.toLowerCase().includes(input.toLowerCase())) {
                matchingCountries.push(country);
                matchingCurrencyCodes.push(code);
            }

            // Ensure a maximum of 5 matches
            if (matchingCountries.length >= 5) {
                break;
            }
        }
    }

    // Display results in the "new-content" div
    var newContentDiv = document.getElementById("new-content");
    newContentDiv.innerHTML = "";

    if (matchingCountries.length === 0 || input === "") {
        newContentDiv.style.display = "none"; // Hide the "new-content" div
        toggleContainerVisibility(true); // Show the container
    } else {
        newContentDiv.style.display = "block"; // Show the "new-content" div
        toggleContainerVisibility(false); // Hide the container

        matchingCountries.forEach(function (country, index) {
            // Create elements for the country data
            var countryDiv = document.createElement("div");
            var countryName = document.createElement("h3");
            var countryDescription = document.createElement("p");

            // Set content
            countryName.textContent = country;
            countryDescription.textContent = "Currency Code: " + matchingCurrencyCodes[index];

            // Append elements to the "new-content" div
            countryDiv.appendChild(countryName);
            countryDiv.appendChild(countryDescription);
            newContentDiv.appendChild(countryDiv);
        });
    }
}

// Function to search the country name input
function searchCountryName() {
    var countryNameInput = document.getElementById("countryName").value.trim();
    searchDisplay(countryNameInput, false);
}

// Function to search the currency code input
function searchCurrencyCode() {
    var currencyCodeInput = document.getElementById('currencyCode').value.trim();
    searchDisplay(currencyCodeInput, true);
}