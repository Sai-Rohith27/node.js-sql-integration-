const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express=require('express');
const app=express();  
const path=require('path');
const port=9090;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'deltapp',
  password:"sai#1234"
});
 
function getRandomUser() {
  return [
     faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    
  ];
}
 app.get("/",(req,res)=>{
      let q="select count(*) from info";
      try {
    connection.query(q,(err,result)=>{
           if(err){
            throw err;
           }
           else{
            let count=result[0]["count(*)"];
            res.render("home",{count});
           }
    });
}
    catch(err){
        console.log(err);
        res.send("Some error in the DB");
    }
 })
 app.listen(9090,()=>{
  console.log("server is listening on pert 9090....");
 })
 
//  let q="INSERT INTO info(username,email,password) values ?";

// let data=[];
// for(let  i=0;i<100;i++){
//    data.push(getRandomUser());
// }

 // try {
//     connection.query(q,[data],(err,result)=>{
//            if(err){
//             throw err;
//            }
//            else{
//             console.log(result);
//            }
//     });
// }
//     catch(err){
//         console.log(err);
//     }
// connection.end();
// console.log(getRandomUser());