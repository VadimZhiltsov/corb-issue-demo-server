const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 3000


app.post('/bad', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type");

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        res.header("Content-Type", "text/json; charset=utf-8");

		    res.json({"uuid":"86e5be60-fa16-41db-9bb1-c5442374f241"});
        res.send();
    }
});

app.post('/good', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type");

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        res.header("Content-Type", "text/json; charset=utf-8");

		    res.json({"uuid":"86e5be60-fa16-41db-9bb1-c5442374f241"});
        res.send();
    }
});

app.post('/good-2', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type");

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        res.header("Content-Type", "text/json; charset=utf-8");

		    res.json({"uuid":"86e5be60-fa16-41db-9bb1-c5442374f241"});
        res.send();
    }
});


const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}
const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port)
})
