import rxRequest from './rx-request';

var location;
const fhemHttp = {
  set location(path) {
    rxRequest.get(path).subscribe(
      () => {
        location = path;
        console.info(`Found fhem instance at ${path}`);
      },
      () => {
        console.error(`An error occurred for location ${path}.`);
      }
    );
  },

  command(command) {
    if (location) {
      return rxRequest.get(`${location}/fhem?cmd=${command}`);
    }
  }
};

export default fhemHttp;
