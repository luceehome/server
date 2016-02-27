import request from 'request';

var location;
const fhemHttp = {
  set location(value) {
    request.get(value, error => {
      if (error) {
        console.error(`An error occurred for location ${value}.`);
      }
      else {
        location = value;
        console.info(`Found fhem instance at ${value}`);
      }
    });
  },

  command(command, callback = () => {}) {
    //TODO: Throw an error if location is not set
    if (location) {
      request.get(`${location}/fhem?cmd=${command}`, callback);
    }
  }
};

export default fhemHttp;
