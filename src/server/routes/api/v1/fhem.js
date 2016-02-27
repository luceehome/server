import express from 'express';
import fhemHttp from '../../../modules/fhem-http';

const router = express.Router();

router.patch('/', (req, res) => {
  fhemHttp.location = 'http://' + req.body.location;
  res.send('Hello World!');
});

export default router;
