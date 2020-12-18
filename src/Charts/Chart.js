import React from 'react';
import { Pie } from "react-chartjs-2";


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
            <h1>Chart 1</h1>
    <Pie data={data} />
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

  
