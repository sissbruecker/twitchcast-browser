const http = require('http');
const express = require('express');

// Init and log config
const config = require('dotenv').config().parsed;

console.log('Twitchcast Browser configuration:');
Object.keys(config).forEach(key => {
    console.log(`\t${key}: ${config[key]}`);
});

// Start server
const app = express();

app.use('/', express.static('public'));

const server = http.createServer(app);
const port = process.env.TWITCHCAST_BROWSER_PORT;

server.listen(port);
