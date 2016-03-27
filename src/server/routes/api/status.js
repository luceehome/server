import express from 'express';
import fhemHttp from './../../modules/fhem-http';

const router = express.Router();

router.get('/', (req, res) => {
  var response = {
    data: {
      timestamp: Date.now(),
      fhem: {},
      status: 'OK',
      success: true
    }
  };

  fhemHttp.check().subscribe(
    () => {
      response.data.fhem = {
        location: fhemHttp.location,
        status: 'OK'
      };
    },
    //TODO: Return sensible error object
    error => {
      response.data.fhem = {
        location: null,
        status: 'ERROR',
        error: error
      }
    },
    () => {
      res.json(response);
    }
  );
});

export default router;
