import express from 'express';
import fhemHttp from './../../modules/fhem-http';
import config from './../../modules/config';

const router = express.Router();

router.patch('/', (req, res) => {
  const location = req.body.location;
  const success = () => res.json({success: true});
  const failure = () => res.json({success: false});

  fhemHttp.setLocation(location).subscribe(
    () => config.setValue('fhemLocation', location).subscribe(success, failure),
    failure
  );
});

export default router;
