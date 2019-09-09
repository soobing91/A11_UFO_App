// from data.js
var tableData = data;

// Create a table
// Capture tbody
var tbody = d3.select('tbody');

// Construct tbody
tbody.html('');
tableData.forEach((sighting) => {
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

/**
[ Part 2 ]
Get distinct values for each entry to make dropdown menus.
**/

// State
var stateInput = d3.select('#states');
var states = [...new Set(
    tableData.map((sighting) => sighting.state)
)];
states.sort();

console.log(states);

states.forEach((state) => {
    var stateOption = stateInput.append('option');
    stateOption.text(state);
});

// Country
var countryInput = d3.select('#countries');
var countries = [...new Set(
    tableData.map((sighting) => sighting.country)
)];
countries.sort();

console.log(countries);

countries.forEach((country) => {
    var countryOption = countryInput.append('option');
    countryOption.text(country);
});

// Shape
var shapeInput = d3.select('#shapes');
var shapes = [...new Set(
    tableData.map((sighting) => sighting.shape)
)];
shapes.sort();

console.log(shapes);

shapes.forEach((shape) => {
    var shapeOption = shapeInput.append('option');
    shapeOption.text(shape);
});

/**/

// Listen events
var button = d3.select('#filter-btn');

button.on('click', function() {
    
    // Capture input elements
    var dateInput = d3.select('#datetime');
    var dateValue = dateInput.property('value');    
    console.log(dateValue);

    var cityInput = d3.select('#cities');
    var cityValue = cityInput.property('value').toLowerCase();
    console.log(cityValue);

    var stateValue = stateInput.property('value');
    console.log(stateValue);

    var countryValue = countryInput.property('value');
    console.log(countryValue);

    var shapeValue = shapeInput.property('value');
    console.log(shapeValue);

    // Filter the table

    var filteredData = tableData.filter((sighting) => 
        (sighting.datetime === dateValue || dateValue === '') &&
        (sighting.city === cityValue || cityValue === '') &&
        (sighting.state === stateValue || stateValue === '') &&
        (sighting.country === countryValue || countryValue === '') &&
        (sighting.shape === shapeValue || shapeValue === '')
    );
    console.log(filteredData);

    // Create the filtered table
    // Reset tbody
    tbody.html('');

    // Reconstruct tbody
    filteredData.forEach((sighting) => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
});

// Return to the original table
var button2 = d3.select('#reset-btn');
button2.on('click', function() {
    tbody.html('');
    tableData.forEach((sighting) => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
});