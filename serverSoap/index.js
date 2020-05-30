var soap = require(`soap`);
var express = require(`express`);
var fileSystem = require('fs');
var service = require('./services/events/eventService');
const { portServerSoap } = require ('./config');


var app = express();

var xml = fileSystem.readFileSync('./serverSoap/services/events/eventTemplate.wsdl', 'utf8');

app.use(require(`body-parser`).raw({type: function(){return true;}, limit: '5mb'}));


app.listen(portServerSoap, function(){
  soap.listen(app, '/ev_events', service, xml, function(){
    console.log('Server Soap : Open in port ' + portServerSoap);
    console.log('Server Soap : API on ' + `http://localhost:${portServerSoap}/ev_events?wsdl`);
  });
});

module.exports = {app};