create table employee(id integer, name text, phoneno text, department text)


alter table employee add column officeLocation text not null default 'banglore'



insert into  employee (id, name, phoneno, department, officeLocation)
 values(1, 'Ramesh', '123445566', 'HR', 'Gurgaon')
