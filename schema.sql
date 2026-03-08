
CREATE TABLE info(
 id INT  AUTO_INCREMENT PRIMARY KEY ,
 username varchar(60) unique,
 email  varchar(50) unique not null,
 password varchar(50) not null
);
