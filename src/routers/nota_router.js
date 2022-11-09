const {Router} = require ("express")
const router =new Router()
const nota_con = require ("../controllers/nota_controller")

router.get('/',nota_con.getNotas)
router.post('/', nota_con.addNota)

module.exports = router