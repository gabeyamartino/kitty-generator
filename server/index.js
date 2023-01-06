const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.get('/kitties', (req, res) => {
  console.log("I'm hit!")
  let rando = Math.floor(Math.random() * 2000)


  axios.get(`https://api.thecatapi.com/v1/images/search?id=${rando}`)
  .then((data) => {
    console.log(data.data);
    res.send(data.data)
  })
  .catch((err) => {
    console.log(err)
  })
})


app.listen(port, () => {
  console.log(`listening on ${port}`)
})