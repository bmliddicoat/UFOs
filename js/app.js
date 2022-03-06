// import the data from data.js
const tableData = data;
// Reference the HTMl table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // First, clear out existing data
    tbody.html("");
  }
  // add the forEach Function to loop through each object 
  //and append a row and cells for each vale
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
  });
  