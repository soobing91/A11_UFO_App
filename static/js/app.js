// from data.js
var tableData = data;

// Create a table
// Capture tbody
var tbody = d3.select('tbody');
tbody.html('');

// Construct tbody
tableData.forEach((sighting) => {
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

// Listen events
var button = d3.select('#filter-btn');

button.on('click', function() {
    
    // Capture input element
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');    
    console.log(inputValue);

    // Filter the table
    var filteredData = tableData.filter((sighting) => sighting.datetime === inputValue);
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


