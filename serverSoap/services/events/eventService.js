const {
  getAllEvents,
  getEventByID
} = require("../../repositories/eventRepository.js");


var myService = {
  ev_events: {
    functions: {
      AllEvents: async function () { 
        return await getAllEvents();
      },
      EventById: async function (args) {
        return await getEventByID(args);
      }
    }
  }
};

module.exports = myService;
