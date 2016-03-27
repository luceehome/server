import rx from 'rx';
import rxRequest from './rx-request';
import config from './config';

var location;
const fhemHttp = {
  get location() {
    return location;
  },

  setLocation(path) {
    const check = fhemHttp.check(path);
    check.subscribe(_ => location = path);

    return check;
  },

  check(path = location) {
    const check = rxRequest.get(path);

    check.subscribe(
      () => {
        console.info(`Found fhem instance at ${path}.`);
      },
      () => {
        console.error(`No fhem instance found at ${path}.`);
      }
    );

    return check;
  },

  command(command) {
    return rxRequest.get(`${location}/fhem?cmd=${command}`);
  }
};

config.getValue('fhemLocation').subscribe(fhemHttp.setLocation);

export default fhemHttp;
