// Function to display search results
function searchDisplay(text, searchType) {
    // Select display title element
    let displayTitle = document.getElementById("display-title");

    // Create a dynamic list container with id
    let dynamicList = document.createElement('div');
    dynamicList.id = "dynamic-list";

    // Create an array to prevent duplicates
    var addedCountries = [];

    // Select all elements with the class "country"
    var countryElements = document.querySelectorAll('.country');

    // Select "new-content" div where dynamic search is displayed
    var newContentDiv = document.getElementById("new-content");

    // Remove all child nodes from newContentDiv
    while (newContentDiv.firstChild) {
        newContentDiv.removeChild(newContentDiv.firstChild);
    }

    // Loop through all country elements
    for (let i = 0; i < countryElements.length; i++) {
        var countryElement = countryElements[i];
        var nameElement = countryElement.querySelector('.name');
        var currencyElement = countryElement.querySelector('.currency');
        var name = nameElement.textContent.trim();
        var code = currencyElement.textContent.trim();

        // Check if the input matches either the currency code or country name
        if ((searchType && code.toLowerCase().includes(text.toLowerCase())) ||
            (!searchType && name.toLowerCase().includes(text.toLowerCase()))) {
            // Check if the country has not already been added
            if (addedCountries.indexOf(name) === -1) {
                // Clone the country element and add it to the dynamic list
                var clonedCountry = countryElement.cloneNode(true);
                dynamicList.appendChild(clonedCountry);
                addedCountries.push(name);
            }
        }
    }

    // Hide newContentDiv when there are no matching elements or input is empty
    if (dynamicList.childNodes.length === 0) {
        newContentDiv.style.display = "none";
        displayTitle.style.display = "none";
    } else {
        // Show newContentDiv and append dynamicList as a child
        newContentDiv.style.display = "block";
        displayTitle.style.display = "block";
        newContentDiv.appendChild(dynamicList);
    }
}

// Function to search by country name
function searchCountryName() {
    var countryNameInput = document.getElementById("countryName").value.trim();

    // Check if the input is empty
    if (countryNameInput === "") {
        // Clear and hide newContentDiv and displayTitle
        var newContentDiv = document.getElementById("new-content");
        while (newContentDiv.firstChild) {
            newContentDiv.removeChild(newContentDiv.firstChild);
        }
        newContentDiv.style.display = "none";
        var displayTitle = document.getElementById("display-title");
        displayTitle.style.display = "none";
    } else {
        // Perform a dynamic search based on the input
        searchDisplay(countryNameInput, false);
    }
}

// Function to search by currency code
function searchCurrencyCode() {
    var currencyCodeInput = document.getElementById('currencyCode').value.trim();

    // Check if the input has 3 uppercase letters and no numbers
    var currencyCodePattern = /^[A-Z]{3}$/;
    if (currencyCodePattern.test(currencyCodeInput)) {
        // Dynamic search for currencyCode
        searchDisplay(currencyCodeInput, true);
    } else {
        // Clear and hide newContentDiv and displayTitle
        var newContentDiv = document.getElementById("new-content");
        while (newContentDiv.firstChild) {
            newContentDiv.removeChild(newContentDiv.firstChild);
        }
        newContentDiv.style.display = "none";
        var displayTitle = document.getElementById("display-title");
        displayTitle.style.display = "none";
    }
}
