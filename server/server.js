const express = require('express')
const path = require('path');

let server = express()

const port = process.env.port || 3000

server.use(express.static("dist"))

server.get('*', function(req, res) {
  res.sendFile(path.resolve('./app/index.html'));
})

server.listen(port, () => console.log(`Server up and running on port ${port} !`));

// need webpack set up, index.html