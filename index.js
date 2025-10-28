const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let data = fs.readFileSync('./file.txt', 'utf8');
  if(data){
    res.send(data)
  }
  res.send('can not read data from file')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})