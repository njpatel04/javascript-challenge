// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");



// Step 3:  Use `Object.entries` to console.log each UFO report value
 data.forEach(function(UFOReport) {
   console.log(UFOReport);
   var row = tbody.append("tr");

   Object.entries(UFOReport).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
 });

// YOUR CODE HERE!
