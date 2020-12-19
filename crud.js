const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb+srv://alex:MTNbike1!@cluster0.nyxr4.mongodb.net/trial?retryWrites=true&w=majority';

mongoDBClient.connect(url, { useUnifiedTopology: true }, (opperationError, dbHandler)=>{
    if (opperationError){
        console.log("Connection Error :(");
    } else {
        console.log("Connected");

//-----------------Start insert------------------------//

        let data = {title: "green", amount: 100, color: "black"};
        dbHandler.db('trial').collection('trial2').insertOne(data, (operr, opresult)=>{
            if (operr){
                console.log("insertion error");
            } else {
                console.log("Insert Successful");
                console.log("Goodbye");
                dbHandler.close();
            }
        })

//------------------End insert------------------------//


//-----------------Start Find All---------------------//

        // dbHandler.db('final_project').collection('budget').find().toArray((operr, opresult)=>{
        //     if (operr){
        //         console.log("Find All Error");
        //     } else {
        //         for (var i=0; i <  opresult.length; i++){

        //         console.log(opresult[i]);

        //         }

        //         console.log("Find All Successful");
        //         console.log("Goodbye");

        //         dbHandler.close();
        //     }
        // })

//-------------------End Find All---------------------//


//-----------------Start Find One---------------------//

// dbHandler.db('final_project').collection('budget').findOne({title: "dining"}, (operr, opresult)=>{
//     if (operr){
//         console.log("Find One error");
//     } else {

//         console.log(opresult);
//         console.log("Find One Successful");
//         console.log("Goodbye");

//         dbHandler.close();
//     }
// })

//-------------------End Find One---------------------//


//-----------------Start Update---------------------//

    //   let newData = {$set: {title: "food", amount: 130, color: "acf50a"}};
    //     dbHandler.db('final_project').collection('budget').updateOne({title: 'dining'}, newData, (operr, opresult)=>{
    //         if (operr){
    //             console.log("update error");
    //         } else {
    //             console.log("update Successful");
    //             console.log("Goodbye");
    //             dbHandler.close();
    //         }
    //     })


//-------------------End Update---------------------//



//-----------------Start Delete---------------------//

// dbHandler.db('final_project').collection('budget').deleteOne({title: 'dining'}, (operr, opresult)=>{
//     if (operr){
//         console.log("delete error");
//     } else {
//         console.log("delete Successful");
//         console.log("Goodbye");
//         dbHandler.close();
//     }
// })

//-------------------End Delete---------------------//

//-----------------Start Find Titles---------------------//

// dbHandler.db('trial').collection('trial2').find({}, {projection:{_id: 0, title: 1}}).toArray((operr, opresult)=>{
//             if (operr){
//                 console.log("Find All Error");
//             } else {
//                 for (var i=0; i <  opresult.length; i++){

//                 console.log(opresult[i]);

//                 }

//                 console.log("Find All Successful");
//                 console.log("Goodbye");

//                 dbHandler.close();
//             }
//         })

//-------------------End Find All---------------------//
        
    }
});
