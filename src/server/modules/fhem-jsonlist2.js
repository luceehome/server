import fhemHttp from './fhem-http';

const fhemJsonList2 = {
  all() {
    return fhemHttp.command('jsonlist2&XHR=1');
  }
};

export default fhemJsonList2;
