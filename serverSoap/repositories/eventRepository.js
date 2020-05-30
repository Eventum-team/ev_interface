const axios = require("axios");
const URI = require("../servers/msEvents");


const completeURI = `${URI}events`;
const completeFilterURI = `${URI}events/filter`;

const getAllEvents = async () => {
  try {
    const { data } = await axios.get(completeURI);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};


const getEventByID = async ( eventId ) => {
  try {
    const { data } = await axios.get(`${completeURI}/${eventId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

module.exports = {
  getAllEvents,
  getEventByID,
};