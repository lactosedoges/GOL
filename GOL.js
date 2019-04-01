function tableCreate() {
  //body reference 
  var body = document.getElementsByTagName("body")[0];

  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");
  tbl.style.height='500px';
  tbl.style.width='500px';
  //tbl.style.border-collapse: collapse;
  tbl.style.border='border-collapse';
  var tblBody = document.createElement("tbody");

  // cells creation
  for (var j = 0; j <= 50; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i <= 50; i++) {
      // create element <td> and text node 
      // put <td> at end of the table row
      var cell = document.createElement("td");
      cell.style.height='10px';
      cell.style.width='10px';
      row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "1");
}

tableCreate();