//ALTER USER 'apiuser'@'%' IDENTIFIED WITH mysql_native_password BY 'Mysql123.'; 4.227.184.211

var mysql = require('mysql')

const MYSQL_HOST = "4.227.184.211"
const MYSQL_USER = "apiuser"
const MYSQL_PASSWORD = "Mysql123."
const MYSQL_DB = "usuarios"

const connection = mysql.createConnection({
  host : MYSQL_HOST,
  user : MYSQL_USER,
  password : MYSQL_PASSWORD,
  database : MYSQL_DB
})

connection.connect((err)=>{
  if (err){
    console.log('Maestra')
    console.log('Error '+err)
  }else{
    console.log('Connect success mysql Master')
  }
})

module.exports = connection