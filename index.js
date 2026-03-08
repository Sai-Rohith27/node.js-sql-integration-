const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'deltapp',
  password:"sai#1234"
});
 
let q="INSERT INTO info(username,email,password) values ?";

let data=[];
for(let  i=0;i<100;i++){
   data.push(getRandomUser());
}
try {
    connection.query(q,[data],(err,result)=>{
           if(err){
            throw err;
           }
           else{
            console.log(result);
           }
    });
}
    catch(err){
        console.log(err);
    }
connection.end();
function getRandomUser() {
  return [
     faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    
  ];
}

// console.log(getRandomUser());