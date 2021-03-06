const express = require('express');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');

const app = express();
const port = 3000;
const devPort = 3001;
"use strict";

console.log(process.env.NODE_ENV == 'development');
if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.use('/', express.static(__dirname + '/../public/'));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
