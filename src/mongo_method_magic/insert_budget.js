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
        let data = {title: usr_title, amount: usr_amount, color: usr_color};
        dbHandler.db('trial').collection('trial2').insertOne(data, (operr)=>{
            if (operr){
                console.log("insertion error");
            } else {
                console.log("Insert Successful");
                console.log("Goodbye");
                dbHandler.close();
            }
        })
    }
});

