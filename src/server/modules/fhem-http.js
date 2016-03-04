import rx from 'rx';
import rxRequest from './rx-request';
import config from './config';

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
    return rxRequest.get(`${location}/fhem?cmd=${command}`);
  }
};

config.getValue('fhemLocation').subscribe(fhemHttp.setLocation);

export default fhemHttp;
