// require and instantiate express


const http = require('http');
var express = require('express')
var path = require('path')
const app = require('express')()
var bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;




// set the view engine to ejs
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



// blog home page
app.get('/', (req, res) => {
  res.render('home', {})
})


app.listen(8080)

console.log('listening on port 8080')

/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
