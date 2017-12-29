var express = require('express');

var app = express();
app.set('view engine', 'pug');
app.use(express.static('stylesheets'));
app.use(express.static(__dirname + '/public'));

var port = 3000;

console.log('listening on ' + port);

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('*', function (req, res) {
    res.render('404', { path: 'zmmille2.github.io' + req.path }); // can I get this programmatically?
})

app.listen(port);