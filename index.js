const express=require("express");
const app=express();
const path=require("path")

const staticPath=path.join(__dirname,"/invitation");

app.use(express.static(staticPath));

app.get("/01",(req,res)=>{
    res.sendFile(__dirname+"/invitation/savaliya_family.html");
});


app.get("/02",(req,res)=>{
    res.sendFile(__dirname+"/sorathiya_family.html");
});
// app.get("",(req,res)=>{
//     res.render("index");
// });
app.listen(9000)
