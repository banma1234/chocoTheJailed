const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, () => {
    console.log('server has been launched');
})

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('*', function(req, res){    // 리액트 Router 사용시 필요한 코드
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

// app.use(express.json());
// var cors = require('cors');
// app.use(cors());