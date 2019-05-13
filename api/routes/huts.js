var express = require('express');
var router = express.Router();
const axios = require('axios');

const baseUrl = `https://api.doc.govt.nz/v2/huts`
const API_KEY = process.env.DOC_API_KEY

router.post('/all/', function (req, res) {
  axios.get(`${baseUrl}`, {
    headers: {
      'x-api-key': API_KEY
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

router.post('/detail/', function (req, res) {
  axios.get(`${baseUrl}/${+req.body.id}/detail`, {
    headers: {
      'x-api-key': API_KEY
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

