const portServerRest = process.env.SERVER_REST_PORT || 3010;
const ipServerRest = process.env.HOST_IP || 'localhost';
const uriServerRest = `http://${ipServerRest}:${portServerRest}/`

module.exports = {
    portServerRest,
    uriServerRest
};