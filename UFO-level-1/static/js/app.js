// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");
// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
//form.on("submit",runEnter);


function runEnter() {
  var checkDate=false;
  var checkCity=false;
  var checkCountry=false;
  var checkState=false;
  var checkShape = false;
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  // get date and check if have value
  var filteredData = tableData;
  var inputElement = d3.select("#datetime");
  var inputDate = inputElement.property("value");
  console.log(inputDate);
  if (inputDate !== "") {
      checkDate=true;
      filteredData = filteredData.filter(ovni => ovni.datetime === inputDate);
  };
  // get country and check if have value
  var inputElement = d3.select("#country");
  var inputCountry = inputElement.property("value");
  console.log(inputCountry);
  if (inputCountry !== "") {
     filteredData = filteredData.filter(ovni => ovni.country === inputCountry);
     checkCountry=true;
  };
  // get state and check if have value
  var inputElement = d3.select("#state");
  var inputState = inputElement.property("value");
  console.log(inputState);
  if (inputState !== "") {
     checkState=true;
     filteredData = filteredData.filter(ovni => ovni.state === inputState);
  };
  
  // get city and check if have value
  var inputElement = d3.select("#city");
  var inputCity = inputElement.property("value");
  console.log(inputCity);
  if (inputCity !== "") {
      filteredData = filteredData.filter(ovni => ovni.city === inputCity );
      checkCity=true;
  };
  // get shape and check if have value
  var inputElement = d3.select("#shape");
  var inputShape = inputElement.property("value");
  console.log(inputShape);
  if (inputShape !== "") {
      checkShape=true;
      filteredData = filteredData.filter(ovni => ovni.shape === inputShape);
  };
  if (checkDate===false && checkCountry===false && checkState===false && checkCity===false && checkShape===false){
    filteredData="";
  };
    
  console.log(filteredData); 

  //create table
  var tbody=d3.select("tbody");
  tbody.html("");

  filteredData.forEach((ovniReport) => {
        var row = tbody.append("tr");
        Object.entries(ovniReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
  });    
};