const path = require('path');
const express = require('express');
const server = express();
// const mongoClient = require('mongodb').MongoClient;

const users = [
    {
        id: "hagota",
        name: "KingNewyork",
        email: "hagota200@gmail.com"
    },
    {
        id: "banma1234",
        name: "lilbumsu",
        email: "banma1234@gmail.com"
    }
]

server.listen(8080, () => { // run code
    console.log('server has been launched');
})

server.use(express.static(path.join(__dirname, 'build')));

server.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

server.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

server.get("/api/user", function(req, res){
    res.json(users);
});

// server.use(express.json());
// var cors = require('cors');
// server.use(cors());