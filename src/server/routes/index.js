import express from 'express';
import config from './../modules/config';

const router = express.Router();

router.get('/', function (req, res) {
  var fhemLocation = '';

  config.getValue('fhemLocation').subscribe(
    value => fhemLocation = value,
    err => console.log(`An error occurred while setting fhemLocation: ${err}`),
    () => res.render('index', {fhemLocation: fhemLocation})
  );
});

module.exports = router;
