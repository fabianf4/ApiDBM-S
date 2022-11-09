const connectionM = require("../drivers/mysqlM_driver")
const connectionE = require("../drivers/mysqlE_driver")

const notaCrud = {
  addNota: async (id, descripcion, idUsuario, callback) => {
    await connectionM.query(
      `insert into nota values(${id},"${descripcion}","${idUsuario}")`,
      (err, result) => {
        if (err) console.log(err)
        callback(result)
      }
    )
  },
  getAllNotas: async (callback) => {
    connectionE.query(`select * from nota`, (error, results) => {
      if (error) console.log(error)
      callback(results)
    })
  }
}

module.exports = notaCrud