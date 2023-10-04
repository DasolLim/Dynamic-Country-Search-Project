function searchDisplay(input, isCurrencySearch) {
    let displayTitle = document.getElementById("display-title");

    // Create a document fragment to store matching elements
    let dynamicList = document.createElement('div');
    dynamicList.id = "dynamic-list";

    // Keep track of added country names to prevent duplicates
    var addedCountries = [];

    // Check for matches and add
    if (!input == "") {
        var countryElements = document.querySelectorAll('.country');

        for (let i = 0; i < countryElements.length; i++) {
            var countryElement = countryElements[i];
            var nameElement = countryElement.querySelector('.name');
            var currencyElement = countryElement.querySelector('.currency');
            var name = nameElement.textContent.trim();
            var code = currencyElement.textContent.trim();

            if ((isCurrencySearch && code.toLowerCase().includes(input.toLowerCase())) ||
                (!isCurrencySearch && name.toLowerCase().includes(input.toLowerCase()))) {

                // Check if the country has already been added
                if (addedCountries.indexOf(name) === -1) {
                    // Clone the country element and add it to the fragment
                    var clonedCountry = countryElement.cloneNode(true);
                    dynamicList.appendChild(clonedCountry);
                    addedCountries.push(name);
                }
            }
        }
    }

    // Display results in the "new-content" div
    var newContentDiv = document.getElementById("new-content");
    newContentDiv.innerHTML = "";

    if (dynamicList.childNodes.length === 0 || input === "") {
        newContentDiv.style.display = "none"; // Hide the "new-content" div
        displayTitle.style.display = "none"; // Hide the "display-title" div
    } else {
        newContentDiv.style.display = "block"; // Show the "new-content" div
        displayTitle.style.display = "block"; // Show the "display-title" div
        newContentDiv.appendChild(dynamicList); // Append the cloned elements
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