import rx from 'rx';
import rxRequest from './rx-request';

var location;
const fhemHttp = {
  setLocation(path) {
    const check = rxRequest.get(path);

    check.subscribe(
      () => {
        location = path;
        console.info(`Found fhem instance at ${path}`);
      },
      () => {
        console.error(`An error occurred for location ${path}.`);
      }
    );

    return check;
  },

  command(command) {
    if (location) {
      return rxRequest.get(`${location}/fhem?cmd=${command}`);
    }
  }
};

export default fhemHttp;
