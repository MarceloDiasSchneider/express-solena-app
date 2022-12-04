const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('fist app express and srver linux vps');
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log('a post queste recive');
  res.send('Hello World from express and vps!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})