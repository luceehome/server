import _ from 'lodash';
import fhemHttp from './fhem-http';

const fhemJsonList2 = {
  all() {
    return fhemHttp.command('jsonlist2&XHR=1');
  },

  byName(name) {
    return this.all().map(list => _.find(list.Results, {Name: name}));
  }
};

export default fhemJsonList2;
