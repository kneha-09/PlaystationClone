let express=require("express");
let app=express();
let port=3245;
let {dbConnect,getData} = require('./controller/dbController')

app.get('/',(req,res) => {
    res.send('Hiii From express')
})


app.get("/item",async(req,res)=>{
    let query={};
    let collection="item"
    let output= await getData(collection,query)
    res.send(output)
})


//get all one type item eg
app.get("/categoryItem",async(req,res)=>{
    if(req.query.categoryId){
        query={categoryId: Number(req.query.categoryId)}
    }
    else{
        query = {}
    }
    let collection = "item";
    let output = await getData(collection,query);
    res.send(output)
})


app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})