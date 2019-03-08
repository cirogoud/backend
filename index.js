const express = require('express');
const app = express();
const port = 3000;

app
    .set('view engine', 'pug')
    .use('/static', express.static('static'))
    .get('/', appeltaart)
    .get('/about', about)
    .get('*', notfound);

function appeltaart(req, res){
  res.render("index.pug");
}
function about(req, res){
  res.render("about.pug");
}
function notfound(req, res){
  res.status(404).send('Error 404: not found');
}

app.listen(port, () => console.log(`Server is gestart op port: ${port}!`))