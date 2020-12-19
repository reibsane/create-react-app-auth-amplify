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
              <h3>Trying to get this JSON to work is killing me, my quereys are under /src/mongo_method_magic/ on my github</h3>
              <h3>I know I probably wont get any points for this, but they all work on their own</h3>
              <h3>My problem is actually implementing them on my dashboard page. I cant get the results over here</h3>
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

  
