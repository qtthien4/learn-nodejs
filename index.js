const express = require('express');
const app = express();

const port = 2000;


app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req, res) {
    res.render('index');
})

app.get('/user', function(req, res) {
    res.send('user list');
})
app.listen(port, function() {
    console.log('sever listening on port ' + port);
})