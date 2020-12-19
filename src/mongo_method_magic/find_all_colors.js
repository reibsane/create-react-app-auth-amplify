const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb+srv://alex:MTNbike1!@cluster0.nyxr4.mongodb.net/trial?retryWrites=true&w=majority';

mongoDBClient.connect(url, { useUnifiedTopology: true }, (opperationError, dbHandler)=>{
    if (opperationError){
        console.log("Connection Error :(");
    } else {
        console.log("Connected");


        
dbHandler.db('trial').collection('trial2').find({}, {projection:{_id: 0, color: 1}}).toArray((operr, opresult)=>{
    if (operr){
        console.log("Find All Error");
    } else {
        for (var i=0; i <  opresult.length; i++){

        console.log(opresult[i]);

        }

        console.log("Find All Successful");
        console.log("Goodbye");

        dbHandler.close();
    }
})
}
});