const express = require(`express`);
const {
    getAllTags,
    getImagesByTag
  } = require("./requests/eventRequest");

const {
  portServerRest,
  uriServerRest
} = require ('./config');

const appRest = express();

appRest.get('/getAllTags', function (req, res) {
  getAllTags(res);
});

appRest.get('/imagesByTag/:idTag', function (req, res) {
    getImagesByTag(req, res);
});

appRest.listen(portServerRest, function () {
  console.log(`Server Rest : API on ${uriServerRest}`);
});