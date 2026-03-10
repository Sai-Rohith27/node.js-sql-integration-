
CREATE TABLE info(
 id INT  AUTO_INCREMENT PRIMARY KEY ,
 username varchar(60) unique,
 email  varchar(50) unique not null,
 password varchar(50) not null
);

-- insert into info (username,email,password)
-- for(int i=0;i<100;i++){
--     values()
-- }
--  let q="INSERT INTO info(username,email,password) values ?";
--  let data=[];
-- // for(let  i=0;i<100;i++){
-- //    data.push(getRandomUser());
-- // }

--  // try {
-- //     connection.query(q,[data],(err,result)=>{
-- //            if(err){
-- //             throw err;
-- //            }
-- //            else{
-- //             console.log(result);
-- //            }
-- //     });
-- // }
-- //     catch(err){
-- //         console.log(err);
-- //     }
-- // connection.end();
-- // console.log(getRandomUser());

-- function getRandomUser() {
--   return [
--      faker.internet.username(),
--     faker.internet.email(),
--     faker.internet.password(),
    
--   ];
-- } 