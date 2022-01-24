const express = require('express');
const path = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('server has been launched');
})

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});