const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb+srv://alex:MTNbike1!@cluster0.nyxr4.mongodb.net/trial?retryWrites=true&w=majority';

mongoDBClient.connect(url, { useUnifiedTopology: true }, (opperationError, dbHandler)=>{
    if (opperationError){
        console.log("Connection Error :(");
    } else {
        console.log("Connected");
        let data = {title: "pink", amount: 75, color: "d09ad3"};
        dbHandler.db('trial').collection('trial2').insertOne(data, (operr, opresult)=>{
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

