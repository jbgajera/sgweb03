const express=require("express");
const app=express();
const path=require("path")

const staticPath=path.join(__dirname,"/invitation");

app.use(express.static(staticPath));

app.get("/Savaliya",(req,res)=>{
    res.sendFile(__dirname+"/invitation/savaliya_family.html");
});


app.get("/Sorathiya_family",(req,res)=>{
    res.sendFile(__dirname+"/sorathiya_family.html");
});
// app.get("",(req,res)=>{
//     res.render("index");
// });
app.listen(5000)
