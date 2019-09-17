const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const pool = require('./configs/db')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Get the rows with highest number in value column 
app.get('/nvstore/', (req, res) => {
  const query = 'SELECT  name, value  FROM  nv_store ORDER BY value  DESC, id desc LIMIT 1'
  pool.query(query, (err, results, fields) => {
    if (err) {
      const response = { data: null, message: err.message, }
      res.send(response)
    }

    const nvstores = [...results]
    const response = {
      data: nvstores,
      message: 'success!',
    }
    res.send(response)
  })
})
 

//  PUT route stores values and returns `OK` if successful
app.put('/nvstore/', (req, res) => {
  const { name, value } = req.body

  const query = `INSERT INTO nv_store (name, value) VALUES ('${name}', '${value}')`
  pool.query(query, (err, results, fields) => {
    if (err) {
      const response = { data: null, message: err.message }
      res.send(response)
    }
    const { insertId } = results
    const response = {
      message: `OK`,
    }
    res.status(201).send(response)
  })
})
 
// Handle invalid routes
app.all('*', function(req, res) {
  const response = { data: null, message: 'Route not found!!' }
  res.status(400).send(response)
})

 
module.exports.handler = serverless(app)
