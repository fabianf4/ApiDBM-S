const connectionM = require("../drivers/mysqlM_driver")
const connectionE = require("../drivers/mysqlE_driver")

const userCrud = {
  addUser: async (id, name, callback) => {
    await connectionM.query(
      `insert into usuario values(${id},"${name}")`,
      (err, result) => {
        if (err) console.log(err)
        callback(result)
      }
    )
  },
  getAllUsers: async (callback) => {
    connectionE.query(`select * from usuario`, (error, results) => {
      if (error) console.log(error)
      callback(results)
    })
  }
}

module.exports = userCrud
