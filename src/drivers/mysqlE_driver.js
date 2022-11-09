//prueba - Prueba123. 4.227.185.97

var mysql = require('mysql')

const MYSQL_HOST = "4.227.185.97"
const MYSQL_USER = "prueba"
const MYSQL_PASSWORD = "Prueba123."
const MYSQL_DB = "usuarios"

const connection = mysql.createConnection({
  host : MYSQL_HOST,
  user : MYSQL_USER,
  password : MYSQL_PASSWORD,
  database : MYSQL_DB
})

connection.connect((err)=>{
  if (err){
    console.log("Esclava");
    console.log('Error '+err)
  }else{
    console.log('Connect success mysql Slave')
  }
})

module.exports = connection