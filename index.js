const express = require('express');
const app = express();

const port = 3000;

app.get('/', function(request, response) {
    response.send('<h1>hello coderx</h1>');
})

app.get('/user', function(req, res) {
    res.send('user list');
})
app.listen(port, function() {
    console.log('sever listening on port ' + port);
})