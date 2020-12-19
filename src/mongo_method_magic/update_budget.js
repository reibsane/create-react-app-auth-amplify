const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb+srv://alex:MTNbike1!@cluster0.nyxr4.mongodb.net/trial?retryWrites=true&w=majority';
var usr_title = null;
var usr_amount = null;
var usr_color = null;
mongoDBClient.connect(url, { useUnifiedTopology: true }, (opperationError, dbHandler)=>{
    if (opperationError){
        console.log("Connection Error :(");
    } else {
        console.log("Connected");
        let newData = {$set: {title: usr_title, amount: usr_amount, color: usr_color}};
        dbHandler.db('final_project').collection('budget').updateOne({title: usr_title}, newData, (operr, opresult)=>{
            if (operr){
                console.log("update error");
            } else {
                console.log("update Successful");
                console.log("Goodbye");
                dbHandler.close();
            }
        })
    }
});

