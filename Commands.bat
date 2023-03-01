For create migrate db:
         db-migrate create migrate-user-db-migrate
    Migrate:
         db-migrate up
To create item:-
              curl -X POST http://localhost:3000/users -H "Content-type: application/json" -d '{ "name": "Kaleb", "email": "Kaleb@gmail.com","password":"Kaleb123"}'
              To get:-
              curl http://localhost:3000/users
              To login: -
              curl -X POST http://localhost:3000/users/login -H "Content-type: application/json" -d '{"email": "Kaleb@gmail.com","password":"Kaleb123"}'
Export env:-
          export env $(cat .env)            
          
For mysql:
       To login in terminal:- 
                   mysql -u root -p
                   create database exampledb;
                   show schemas;
For phpmyadmin:
       Mysql username for phpmyadmin:- phpmyadmin@localhost
             Password:- pgpass
             Database admin user: kaleb
             CREATE USER 'Kaleb'@'localhost' IDENTIFIED BY 'Kalpgpass123!';
             
             
             sudo aptitude install <Mypackage>
             
             To start xampp:-
             sudo /opt/lampp/lampp start
             To start mysql:-
             sudo service mysql restart
             To start xampp GUI:-
             sudo /opt/lampp/manager-linux-x64.run
For sequlize db migration:-
             npx sequelize-cli db:migrate
    to undo seed:-
             npx sequelize-cli db:migrate:
    to seed error:-
             npx sequelize-cli db:seed:all --debug

     sequlize seed:-
             npx sequelize-cli db:seed:all   
To kill the port:-
             sudo kill -9 $(sudo lsof -t -i:3000)
To stop mysql startup on ubuntu:-
             sudo systemctl disable mysql
Git push:
   git push origin main:kal_dev
Mysqlconf:
Dbname:- etcdpdb
Dbuser:- kalebt
Dbpass:- pg@Pass1
For conflict
git config pull.rebase false