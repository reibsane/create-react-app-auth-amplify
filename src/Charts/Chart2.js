import React from 'react';
import { Bar } from "react-chartjs-2";


const data = {
    title: {
        text: "Chart 1"
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


function Chart() {
    return (
        <div className='center'>
            <div class='chrt'>
            <h1>Chart 2</h1>
    <Bar data={data} />
  </div>
  <label for="title">Title:</label><br></br>
  <input type="text" id="title" name="title" value="Food"></input><br></br>
  <label for="amount">Amount:</label><br></br>
  <input type="text" id="amount" name="amount" value="0"></input><br></br>
  <label for="color">Color:</label><br></br>
  <input type="text" id="color" name="color" value="blue"></input><br></br>
  <input type="submit" value="Submit"></input>
  </div>
    );
  }

  export default Chart;


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
