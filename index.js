const { faker, ne } = require("@faker-js/faker");
const mysql = require('mysql2');
const express=require('express');
const app=express();  
const path=require('path');
const port=9090;
const methodoverride=require('method-override');
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
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
   
   app.get("/user",(req,res)=>{
        let q2="select * from info";
        try{
          connection.query(q2,(err,result)=>{
            if(err){throw err;}
            else{ res.render("showusers",{result});}
          });
        }
        catch(err){
          console.log(err);
          res.send("some error in the DB");
        }
   });

   app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let {password:formpass,username:newuser}=req.body;
    let q3=`select * from info where id=${id}`; 
     try{
          connection.query(q3,(err,result)=>{
            if(err){throw err;}
            else{
            let user=result[0];
              if(formpass!=user.password){
                res.send("wrong pw bye!");
                            }
                            else{
                              let q4=`update info set username=${newuser} where id=${id}`;
                              try{
                                connection.query(q4,(err,re)=>{
                                  if(err){
                                    throw err;
                                  }else{
                                    res.send(re);
                                  }
                                })
                              } 
                              catch(err){
                                
                              }
                            }
               res.send(user);}
          });
        }
        catch(err){
          console.log(err);
          res.send("some error in the DB");
        }
   });

   app.patch("/user/:id",(req,res)=>{
    res.send("updated");
   })

 app.listen(9090,()=>{
  console.log("server is listening on pert 9090....");
 });
 
//   let q="INSERT IGNORE INTO info(username,email,password) values ?";
//  let data=[];
// for(let  i=0;i<600;i++){
//     data.push(getRandomUser());
//  }

//  try {     connection.query(q,[data],(err,result)=>{
//             if(err){
//              throw err;
//             }
//             else{
//              console.log(result);
//             }
//      });
//  }
//      catch(err){
//          console.log(err);
//      }
// //  connection.end();
//  console.log(getRandomUser());

//  function getRandomUser() {
//    return [
//       faker.internet.username(),
//     faker.internet.email(),
//      faker.internet.password(),
    
//    ];
//  } 