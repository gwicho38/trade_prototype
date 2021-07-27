/**
 * @file server.js
 * @author Luis Fernandez de la Vara<luisfdzdelavara.rubsamen@outlook.com>
 */

//dependencies and imports
//external libraries
var PortfolioAnalytics = require('portfolio-analytics');
const express = require('express');

//user defined
const Sharpe = require('../trade_prototype/SharpeRatio/sharpe');
const Logger = require('./Utilities/logger');

//log server start
Logger.setLevel('debug');
Logger.debug("Creating Trade Prototype Express Server Application!");

//declare express
const app = express();

//declare port
const port = process.env.PORT || 5000;

/***  Middleware   ***/
/***
 * @description middleware function to log request; executed at each request
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
app.use((req, res, next) => {
    // do logging
    Logger.debug('Request: ' + req.url + ' at ' + new Date());
    next();
});

//set static files
app.use(express.static(__dirname + '/'));

/*** Routes   ***/
//set get / route to index.html
app.get('/', function (req, res) {
    res.send("Hello");
});

//set default route for *
app.get('*', function (req, res) {
    res.send("Hello");
});

//start server
app.listen(port, () => {
    Logger.debug('Trade Prototype Express Server Application started on port ' + port);
});

//export server
// module.exports = app;





