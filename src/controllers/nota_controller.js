const nota_model = require ("../model/nota_model")

const nota_controller = {
    getNotas: async (req,res) =>{
        try {
            nota_model.getAllNotas((results) => {
                res.status(200).json({ results })
            })
        } catch (err) {
            res.status(500).json({err})
        }
    },
    addNota: async (req,res)=>{
        try {
            const {id , description, idUsuario} = req.body
            nota_model.addNota(id, description, idUsuario, ({results})=>{
                res.status(200).json({ results })
            })
        } catch (err) {
            res.status(500).json({err})
        }
    }
}

module.exports = nota_controller