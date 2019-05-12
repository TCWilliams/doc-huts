var express = require('express');
var router = express.Router();
const axios = require('axios');
// const dotenv = require('dotenv');
// dotenv.config();

const baseUrl = `https://api.doc.govt.nz/v2/huts
`
const secret = process.env.DOC_API_KEY
console.log('secret', secret)

router.post('/', function (req, res) {
  axios.get(`${baseUrl}`, {
    headers: {
      'x-api-key': secret
    }
  })
    .then(response => {
      res.send(response.data)
    })
    .catch(err => {
      console.log('error', err.response)
      res.send(err.response.data);
    });
});


module.exports = router;

