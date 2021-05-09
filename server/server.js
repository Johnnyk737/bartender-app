const express = require('express')
const path = require('path');

const {runTasks} = require('./tasks/tasks');
const drinkRouter = require('./routes/drink')

let server = express()

// run tasks
runTasks();

const port = process.env.port || 3000

server.use(express.static("dist"))

server.use('/api', drinkRouter)

server.get('*', function(req, res) {
  res.sendFile(path.resolve('./app/index.html'));
})

let app = server.listen(port, () => {
  var host = app.address().address;  
  var port = app.address().port;  
  console.log('Server up and running on http://%s:%s', host, port);
})

// need webpack set up, index.html
