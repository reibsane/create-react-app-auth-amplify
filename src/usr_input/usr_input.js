import React from 'react';


function Usr_input() {
  return (
    <div className="center">
    <div>
     <h3>Rather than have a seperate page for modifying the budget, I thought 
    it would be best to allow users to modify their budget from the dashboard</h3>

    <h3>My plan was to take user input here, pass it off to the server,</h3>
    <h3>have the server perform the action on the database, then update all 3 charts with that new information.</h3>
  <label for="title">Title:</label><br></br>
  <input type="text" id="title" name="title" value="Enter Title"></input><br></br>
  <label for="amount">Amount:</label><br></br>
  <input type="text" id="amount" name="amount" value="Enter Amount"></input><br></br>
  <label for="color">Color:</label><br></br>
  <input type="text" id="color" name="color" value="Enter Color"></input><br></br>
  <input type="submit" value="Insert"></input>
  <input type="submit" value="Update"></input>
  <input type="submit" value="Delete"></input>

  <h3>I was planning on using these buttons to decide what happens with inputted data</h3>
    <h3>my "Find All" quereys are for populating the charts, they  gather  all titles, amounts, and colors into respective arrays,</h3>
    <h3>which makes populating the chart fields more streamlined. The insert, update, and delete querys only modify one record at a time, designed for user inputs</h3>
    </div>
    </div>
    
  );
}

export default Usr_input;
