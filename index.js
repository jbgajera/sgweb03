// const express=require("express");
// const app=express();
// const path=require("path")

// const staticPath=path.join(__dirname,"/invitation");

// app.use(express.static(staticPath));

// app.get("/Savaliya_family",(req,res)=>{
//     res.sendFile(__dirname+"/invitation/savaliya_family.html");
// });


// app.get("/Sorathiya_family",(req,res)=>{
//     res.sendFile(__dirname+"/sorathiya_family.html");
// });
// // app.get("",(req,res)=>{
// //     res.render("index");
// // });
// app.listen(3000)



const express=require("express");
const app=express();
const path=require("path")
const router = express.Router();

const staticPath=path.join(__dirname,"./invitation");

app.use(express.static(staticPath));

// app.get("/Savaliya_family",(req,res)=>{
//     res.sendFile(__dirname+"/savaliya_family.html");
// });


// app.get("/Sorathiya_family",(req,res)=>{
//     res.sendFile(__dirname+"/invitation/sorathiya_family.html");
// });
// app.get("",(req,res)=>{
//     res.render("index");
// });
// app.listen(8000)


router.get('/Savaliya',function(req,res){
  res.sendFile(path.join(__dirname+'/invitation/savaliya_family.html'));
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use('/', router);
app.listen(process.env.port || 9000);

console.log('Running at Port 9000');