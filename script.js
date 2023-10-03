// Store country names, currency codes, images, and regions
let countryData = [];
let currencyCodeData = [];
let countryLinks = [];
let countryImages = [];
let countryRegions = [];

// DOMContentLoaded process web contents and prevent 'undefined' contents 
document.addEventListener("DOMContentLoaded", function () {
    // Select all class name "country"
    let countryElements = document.querySelectorAll('.country');

    // Loop through the country elements
    countryElements.forEach(countryElement => {
        let nameElement = countryElement.querySelector('.name');
        let currencyElement = countryElement.querySelector('.currency');
        let linkElement = nameElement.querySelector('a');
        let imageElement = countryElement.querySelector('img');
        let regionElement = countryElement.querySelector('.region');

        // Store found country data
        if (nameElement) {
            let name = nameElement.textContent.trim();
            countryData.push(name);
        }

        if (currencyElement) {
            let currency = currencyElement.textContent.trim();
            currencyCodeData.push(currency);
        }

        if (linkElement) {
            let link = linkElement.href;
            countryLinks.push(link);
        }

        if (imageElement) {
            let imageSrc = imageElement.src;
            countryImages.push(imageSrc);
        }

        if (regionElement) {
            let region = regionElement.textContent.trim();
            countryRegions.push(region);
        }
    });
});

function searchDisplay(input, searchType) {
    // Create an array to store matching elements
    let matchingCountries = [];
    let matchingCurrencyCodes = [];
    let matchingImages = [];
    let matchingRegions = [];
    let matchingLinks = [];

    // Check for matches and add
    if (!input == "") {
        for (let i = 0; i < countryData.length; i++) {
            let country = countryData[i];
            let code = currencyCodeData[i];

            // Currency code search operation
            if (searchType && code.toLowerCase().includes(input.toLowerCase())) {
                //Pushing country name, link, currency code, image, and region
                matchingCountries.push(country);
                matchingLinks.push(countryLinks[i]);
                matchingCurrencyCodes.push(code);
                matchingImages.push(countryImages[i]);
                matchingRegions.push(countryRegions[i]);
                // Country name search operation
            } else if (!searchType && country.toLowerCase().includes(input.toLowerCase())) {
                //Pushing country name, link, currency code, image, and region
                matchingCountries.push(country);
                matchingLinks.push(countryLinks[i]);
                matchingCurrencyCodes.push(code);
                matchingImages.push(countryImages[i]);
                matchingRegions.push(countryRegions[i]);
            }

            // Ensure a maximum of 5 matches
            if (matchingCountries.length >= 5) {
                break;
            }
        }
    }

    // Display results in the "new-content" div
    let newContentDiv = document.getElementById("new-content");
    newContentDiv.innerHTML = "";

    if (matchingCountries.length === 0 || input === "") {
        // Remove/hide the "new-content" div
        newContentDiv.style.display = "none";
    } else {
        // Display/show the "new-content" div
        newContentDiv.style.display = "block";

        matchingCountries.forEach(function (country, index) {
            // Create elements for the country data
            let countryDiv = document.createElement("div");
            let countryImage = document.createElement("img");
            let countryName = document.createElement("h2");
            let countryCurrency = document.createElement("p");
            let countryDescription = document.createElement("span");

            // Create element id for the country data
            countryDiv.id = "dynamic-div";
            countryName.id = "dynamic-country-name";
            countryCurrency.id = "dynamic-currency";
            countryDescription.id = "dynamic-region-names";

            // Create a link element
            let countryLink = document.createElement("a");
            countryLink.href = matchingLinks[index];
            countryLink.textContent = country;

            // Set "new-content" div content
            countryImage.src = matchingImages[index];
            countryName.appendChild(countryLink);
            countryCurrency.textContent = matchingCurrencyCodes[index]
            countryDescription.textContent = "Region(s): " + matchingRegions[index];

            // Append elements to the "new-content" div
            countryDiv.appendChild(countryImage);
            countryDiv.appendChild(countryName);
            countryDiv.appendChild(countryCurrency);
            countryDiv.appendChild(countryDescription);
            newContentDiv.appendChild(countryDiv);
        });
    }
}

// Function to search the country name input
function searchCountryName() {
    let countryNameInput = document.getElementById("countryName").value.trim();
    searchDisplay(countryNameInput, false);
}

// Function to search the currency code input
function searchCurrencyCode() {
    let currencyCodeInput = document.getElementById('currencyCode').value.trim();
    searchDisplay(currencyCodeInput, true);
}