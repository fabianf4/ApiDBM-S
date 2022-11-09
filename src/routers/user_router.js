const {Router} = require ("express")
const router =new Router()
const user_con = require ("../controllers/user_controller")

router.get('/',user_con.getUsers)
router.post('/', user_con.addUser)

module.exports = router