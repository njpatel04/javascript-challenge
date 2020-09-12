// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// adding all data to HTML file
 tableData.forEach(function(UFOReport) {
  var row = tbody.append("tr");

  Object.entries(UFOReport).forEach(function([key, value]) {
     var cell = row.append("td");
     cell.text(value);
   });
});

// button location within HTML file
var button = d3.select('#filter-btn');

// fuction to perform search when clicked
button.on('click', function(){
  
  //captured the text valued entred by user
  var input_text = d3.select('.form-control');

  //Read the data value
  var date = input_text.property('value');

  //Filter the date values that matches users input
  var data_filter = tableData.filter(UFOReport => UFOReport.datetime === date);
  
  var tbody = d3.select('tbody');
  
  //reset the table
  tbody.html("");

  // function to append the data back to HTML file
  data_filter.forEach(function(UFOReport){
        var line = tbody.append('tr');

        Object.entries(UFOReport).forEach(function([key,value]){
            var cell = line.append('td');
            cell.text(value);
        })
  })

});