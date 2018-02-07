var express = require('express');
var fs = require('fs');
var path = require('path');
// var public = require('C:\\Users\\zamiller\\source\\repos\\firstproject\\public');
var root = path.join(__dirname, '..');
var public = path.join(root, 'public');

var app = express();
app.set('view engine', 'pug');
//app.use(express.static('public'));
app.use(express.static('public/img'));
app.use(express.static('public/stylesheets'));
//app.use(express.static('public'));

var port = 3000;

console.log('listening on ' + port);
console.log(root);

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/blog', (req, res) => {
    res.render('blog', {});
})

app.get('/resume', (req, res) => {
    var filePath = path.join(public, 'resume.pdf');

    fs.readFile(filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
})

app.get('*', function (req, res) {
    res.render('404', { path: __dirname + req.path }); // can I get this programmatically?
})

app.listen(port);