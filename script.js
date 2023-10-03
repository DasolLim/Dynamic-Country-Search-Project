// Store country names, currency codes, images, and regions
var countryData = [];
var currencyCodeData = [];
var countryImages = [];
var countryRegions = [];
var countryLinks = [];

// DOMContentLoaded process web contents and prevent 'undefined' contents 
document.addEventListener("DOMContentLoaded", function () {
    // Select all class name "country"
    var countryElements = document.querySelectorAll('.country');

    // Loop through the country elements
    countryElements.forEach(countryElement => {
        var nameElement = countryElement.querySelector('.name');
        var currencyElement = countryElement.querySelector('.currency');
        var imageElement = countryElement.querySelector('img');
        var regionElement = countryElement.querySelector('.region');
        var linkElement = nameElement.querySelector('a'); // Get the link element

        // Store found country data
        if (nameElement) {
            var name = nameElement.textContent.trim();
            countryData.push(name);
        }

        if (currencyElement) {
            var currency = currencyElement.textContent.trim();
            currencyCodeData.push(currency);
        }

        if (imageElement) {
            var imageSrc = imageElement.src;
            countryImages.push(imageSrc);
        }

        if (regionElement) {
            var region = regionElement.textContent.trim();
            countryRegions.push(region);
        }

        if (linkElement) {
            var link = linkElement.href; // Get the link URL
            countryLinks.push(link);
        }
    });
});

function searchDisplay(input, isCurrencySearch) {
    // Create an array to store matching elements
    var matchingCountries = [];
    var matchingCurrencyCodes = [];
    var matchingImages = [];
    var matchingRegions = [];
    var matchingLinks = [];

    // Check for matches and add
    if (!input == "") {
        for (let i = 0; i < countryData.length; i++) {
            var country = countryData[i];
            var code = currencyCodeData[i];

            if (isCurrencySearch && code.toLowerCase().includes(input.toLowerCase())) {
                matchingCountries.push(country);
                matchingCurrencyCodes.push(code);
                matchingImages.push(countryImages[i]);
                matchingRegions.push(countryRegions[i]);
                matchingLinks.push(countryLinks[i]);
            } else if (!isCurrencySearch && country.toLowerCase().includes(input.toLowerCase())) {
                matchingCountries.push(country);
                matchingCurrencyCodes.push(code);
                matchingImages.push(countryImages[i]);
                matchingRegions.push(countryRegions[i]);
                matchingLinks.push(countryLinks[i]);
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
    } else {
        newContentDiv.style.display = "block"; // Show the "new-content" div

        matchingCountries.forEach(function (country, index) {
            // Create elements for the country data
            var countryDiv = document.createElement("div");
            countryDiv.id = "dynamic-div"; // Set the id to "dynamic-div"
            var countryImage = document.createElement("img");
            var countryName = document.createElement("h3");
            var countryDescription = document.createElement("p");

            // Create a link element
            var countryLink = document.createElement("a");
            countryLink.href = matchingLinks[index]; // Set the link URL
            countryLink.textContent = country;

            // Set content
            countryImage.src = matchingImages[index];
            countryName.appendChild(countryLink); // Append the link to the h3 element
            countryDescription.textContent = "Currency Code: " + matchingCurrencyCodes[index] + "\nRegion(s): " + matchingRegions[index];

            // Append elements to the "new-content" div
            countryDiv.appendChild(countryImage);
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