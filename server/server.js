const express = require('express')

const app = express()
const PORT = 5000

app.get('/api',(req,res)=>{
    res.json({"reservations":[]})
})

app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`))