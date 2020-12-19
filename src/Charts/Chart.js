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
    <h3>Trying to get this JSON to work is killing me, my quereys are under /src/mongo_method_magic/ on my github</h3>
              <h3>I know I probably wont get any points for this, but they all work on their own</h3>
              <h3>My problem is actually implementing them on my dashboard page. I cant get the results over here</h3>
  </div>
  </div>
    );
  }

  export default Chart;

  
