create table users(
id INTEGER Not null Primary key AUTO_INCREMENT,
email text not null,
password text not null,
createdAt timestamp default now()
);

create table orders(
id INTEGER Not null Primary key AUTO_INCREMENT,
productId INTEGER not null,
userId INTEGER not null,
quantity INTEGER not null,
payment int not null default 0,
createdAt timestamp default now()
);


create table products(id INTEGER Not null Primary key AUTO_INCREMENT,
name text not null,
category text not null,
price INTEGER not null default 10000,
createdAt timestamp default now()
);



	INSERT INTO users (email, password) VALUES 
("abc@relevel.com", "abcPassWord"),
("xyz@relevel.com", "xyzPassWord"),
("mno@relevel.com", "mnoPassWord"),
("srk@relevel.com", "srkPassWord"),
("relevel@relevel.com", "relevelPassWord");

	INSERT INTO products (name, category, price) VALUES 
("Pixel 4a", "MobilePhone", 30000),
("Pixel 4", "MobilePhone", 34000),
("Sony Bravia", " Television ", 40000),
("Dell", "Laptop", 50000),
("Lenovo", "Laptop", 35000),
("Samsung s7", "MobilePhone", 70000);


	INSERT INTO orders (productId, userId, quantity) VALUES
(1, 1, 2),
(3, 1, 3),
(4, 3, 2),
(5, 2, 1),
(2, 4, 2); 

-- select name, price from products where price in (select max(price) from products);

-- select max(price) from products;

SELECT  GROUP_CONCAT(name) as name, category, GROUP_CONCAT(price) as price FROM products
GROUP BY category order by price;


-- select 'LoggedIN' as result from users where 
-- email = 'relevel@relevel.com' and password = 'relevelPasssWord'

-- select if(
-- (select email from users where 
-- email = 'relevel@relevel.com' and password = 'relevelPasssWord') Is NUll,
-- 'Bad Credentails', 'Logged in'
-- )

-- alter table product change name product_name text
-- alter table product add column rating integer

-- select if(false, 'Logged IN', 'Not Logged IN')

-- create
-- CREATE TABLE EMPLOYEE (
--   empId INTEGER PRIMARY KEY,
--   name TEXT NOT NULL,
--   dept TEXT NOT NULL
-- );

-- -- insert
-- INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales');
-- INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
-- INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales');

-- -- fetch 
-- SELECT * FROM EMPLOYEE WHERE dept = 'Sales';
