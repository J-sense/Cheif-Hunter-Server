const express = require('express')
const app = express()
const cors =require('cors')
const alldata =require('./data/datas.json')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());
app.get('/alldata', (req,res)=>{
    res.send(alldata)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})