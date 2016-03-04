import fs from 'fs';
import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
  var fhemLocation = '';

  fs.readFile('./build/config.json', (err, data) => {
    if (!err) {
      fhemLocation = JSON.parse(data).fhemLocation;
    }

    res.render('index', {fhemLocation: fhemLocation});
  });
});

module.exports = router;
