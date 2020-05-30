const soap = require('soap');
const {urlServer2b} = require('./config.js');

console.log('Client Soap : Ok');

function requestAllTags(callback){
  const args = {};

  soap.createClient(urlServer2b, function(err, client) {
    if(err) {
      callback(err);
      return;
    }

    client.AllTags(args, function(err, result) {
      callback(result);
    });
  });

}

function requestImagesByTag(idTag, callback){
  soap.createClient(urlServer2b, (err, client) => {
    if(err) {
      callback(err);
      return;
    }

    client.ImagesByTag(idTag, (err, result) => {
      callback(result);
    });
  });
}

module.exports = {
  requestAllTags,
  requestImagesByTag
};