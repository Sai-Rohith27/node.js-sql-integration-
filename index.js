const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'deltapp',
  password:"sai#1234"
});
 
let q="INSERT INTO info(username,email,password) values ?";

let users=[
  ["123_email","xyz@gmail.com","abc"],
       ["1234_email","xyza@gmail.com","abcd"],
     ["12345_email","xyzab@gmail.com","abcde"],
];
try {
    connection.query(q,[users],(err,result)=>{
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
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    
  };
}

// console.log(getRandomUser());