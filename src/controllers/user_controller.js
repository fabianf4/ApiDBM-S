const user_model = require ("../model/user_model")

const user_controller = {
    getUsers: async (req,res) =>{
        try {
            user_model.getAllUsers((results) => {
                res.status(200).json({ results })
            })
        } catch (err) {
            res.status(500).json({err})
        }
    },
    addUser: async (req,res)=>{
        try {
            const {id , name} = req.body
            user_model.addUser(id, name, ({results})=>{
                res.status(200).json({ results })
            })
        } catch (err) {
            res.status(500).json({err})
        }
    }
}

module.exports = user_controller