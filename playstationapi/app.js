let express=require("express");
let app=express();
let port=3245;
// let {dbConnect,getData} = require('./controller/dbController')

app.get('/',(req,res) => {
    res.send('Hiii From express')
})
app.listen(port,(err) => {
    // dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})