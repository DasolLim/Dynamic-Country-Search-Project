const countryData = [];

// Get all elements with class name "country"
const countryElements = document.querySelectorAll('.country');

// Loop through the country elements and extract data
countryElements.forEach(countryElement => {
    const nameElement = countryElement.querySelector('.name');
    const currencyElement = countryElement.querySelector('.currency');

    if (nameElement && currencyElement) {
        const name = nameElement.textContent.trim();
        const currency = currencyElement.textContent.trim();

        // Push the extracted data into the countryData array
        countryData.push({ name, currency });
    }
});

alert("Name: " + countryData[0].name + "\nCurrency: " + countryData[0].currency);


function validateCountryName() {
    var searchInput = document.getElementById("countryName");
    var countryName = searchInput.value.trim();

    // Check if the input is empty
    if (countryName === '') {
        alert('Please enter a country name.');
        return false;
    }

    // Check if the input contains any numbers
    if (/\d/.test(countryName)) {
        alert('Country name cannot contain numbers.');
        return false;
    }

    /*
    // Check if the input is longer than 20 characters
    if (countryName.length > 20) {
        alert('Country name should be no more than 20 characters.');
        return false;
    }
    */

    // If all validations pass, you can perform your search or other actions here.
    return true;
}

// Function to validate the currency code input
function validateCurrencyCode() {
    const currencyCodeInput = document.getElementById('currencyCode');
    const currencyCode = currencyCodeInput.value.trim();

    // Check if the input is empty
    if (currencyCode === '') {
        alert('Please enter a currency code.');
        return false;
    }

    // Check if the input consists of three upper case letters A-Z
    if (!/^[A-Z]{3}$/.test(currencyCode)) {
        alert('Currency code should be three upper case letters (A-Z).');
        return false;
    }

    // If all validations pass, you can perform your search or other actions here.
    return true;
}

// Handle Enter key press for country name input
document.getElementById('countryName').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        validateCountryName();
    }
});

// Handle Enter key press for currency code input
document.getElementById('currencyCode').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        validateCurrencyCode();
    }
});