const express = require('express')
const app = express()
const cors =require('cors')
const alldata =require('./data/datas.json')
const port = process.env.PORT || 3000 ;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(cors());
app.get('/alldata', (req,res)=>{
    res.send(alldata)
});
app.get('/alldata/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedId = alldata.find(c => parseInt(c.id) === id);
  res.send(selectedId)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})