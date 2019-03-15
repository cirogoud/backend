var age = require('ager');
const express = require('express');
const app = express();
const port = 3000;

app
    .set('view engine', 'pug')
    .use('/static', express.static('static'))
    .get('/', index)
    .get('/about', about)
    .get('*', notfound);

function index(req, res){
  res.render("index.pug");
}
function about(req, res){
  res.render("about.pug");
}
function notfound(req, res){
  res.status(404).send('Error 404: not found');
}

console.log(age(new Date(1991, 3, 24)));
app.listen(port, () => console.log(`Server is gestart op port: ${port}!`))
