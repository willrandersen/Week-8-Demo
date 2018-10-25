const express = require('express')
const swapi = require('swapi-node');
var bodyParser = require('body-parser')

//  Create an instance of express
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/form.html')
})

app.post("/", (req, res) => {
  let planetNum = req.body.planet

  swapi.getPlanet(planet).then((result) => {
    res.send(result)
  });
  //let message =
  //res.send(message)
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
