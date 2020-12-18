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



function Chart() {
    return (
        <div className='center'>
            <div class='chrt'>
            <h1>Chart 2</h1>
    <Bar data={data} />
  </div></div>
    );
  }

  export default Chart;

