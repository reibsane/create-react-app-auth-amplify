import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    title: {
        text: "Chart"
    },
  labels: ["Rent", "Eat Out", "Grocery"],
  datasets: [
    {
      data: [33, 53, 85],
      fill: true,
      backgroundColor: [ '#32a852', '#c4123b', '#1120bf' ]
    }
  ]
};

function addRow() {
"use strict";

var tableBody = document.getElementById("table-body");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");    
var row = document.createElement("tr");

td1.innerHTML = document.getElementById("item").value;
td2.innerHTML  = document.getElementById("quantity").value;
td3.innerHTML  = document.getElementById("price").value;

row.appendChild(td1);
row.appendChild(td2);
row.appendChild(td3);

tableBody.appendChild(row);
}

function Chart() {
    return (
        <div className='center'>
            <div class='chrt'>
            <h1>Chart 2</h1>
    <Bar data={data} />
  </div>
   Item:
<input type="text" name="item" id="item" />
<br />Quantity:
<input type="text" name="quantity" id="quantity" />
<br />Price: AUD
<input type="text" name="price" id="price" />
<br /><br />
<input type="button" value="Add Product +" onClick="addRow()" id="add"></input>
<br /><br />
<table id="table" border="1">
<thead id="table-head">
<tr>
    <th>Item</th>
    <th>Quantity</th>
    <th>Price</th>
</tr>
</thead>
<tbody id="table-body">
</tbody>
</table>
</div>
    );
  }

  export default Chart;
