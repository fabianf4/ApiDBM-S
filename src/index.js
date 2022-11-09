const express = require ("express")
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/user',require('./routers/user_router'))
app.use('/nota',require('./routers/nota_router'))

app.get('/',(req,res)=>{
    res.status(200).json({
        "status": "The API is working correctly"
    })
})


app.listen(3000,()=>{
    console.log(`Api initialized on port ${3000}`)
})