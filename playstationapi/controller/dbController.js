let mongo=require("mongodb");
let {MongoClient}=require("mongodb");
let mongoUrl="mongodb://127.0.0.1:27017";//url for mongodb
// let mongoUrl="mongodb+srv://Nehak:ZKXcMHRFxqqn96yf@cluster0.dhoev48.mongodb.net/?retryWrites=true&w=majority"
let client=new MongoClient(mongoUrl)//help to connect

//to connect to mongodb
async function dbConnect(){
    await client.connect()
}

let db =client.db("item");

async function getData(colName,query){
    let output=[];
    try{
        const cursor=db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
//output=await db.collection(colName).find(query).toArray()
    }catch(err){
        output.push({"Error":"Error in getData"})
    }
    return output
}
module.exports={
    dbConnect,
    getData
}