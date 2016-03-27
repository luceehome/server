import fs from 'fs';
import rx from 'rx';

const file = './build/config.json';
const config = {
  getValues() {
    return rx.Observable.fromNodeCallback(fs.readFile)(file)
      .map(data => JSON.parse(data));
  },

  setValues(values) {
    return rx.Observable.fromNodeCallback(fs.writeFile)(file, JSON.stringify(values));
  },

  setValue(name, value) {
    const subject = new rx.Subject();

    config.getValues().subscribe(
      values => {
        values[name] = value;
        config.setValues(values).subscribe(subject);
      }
    );

    return subject;
  },

  getValue(name){
    return config.getValues().map(values => values[name]);
  }
};

export default config;
