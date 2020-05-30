const {
  requestAllTags,
  requestImagesByTag
} = require("../../clientSoap");


function getAllTags(res){
  requestAllTags(result => res.send(result));
}
 
function getImagesByTag(req, res){
  const idTag = req.params.idTag;
  requestImagesByTag(idTag, result => res.send(result));
}

module.exports = {
  getAllTags,
  getImagesByTag
}