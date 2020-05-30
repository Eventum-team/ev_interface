const portServerSoap = process.env.SERVER_SOAP_PORT || 8010;
const ipServerSoap = process.env.HOST_IP || 'localhost';
const uriServerSoap = `http://${ipServerSoap}:${portServerSoap}/ev_events?wsdl`

module.exports = {
    portServerSoap,
    uriServerSoap
};