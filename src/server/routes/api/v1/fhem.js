import express from 'express';
import request from 'request';

const router = express.Router();

router.patch('/', (req, res) => {
  const location = 'http://' + req.body.location;

  request.get(location, error => {
    if (error) {
      console.error(`An error occurred for location ${location}.`);
    }
    else {
      console.info(`Found fhem instance at ${location}`);
    }
  });

  res.send('Hello World!');
});

export default router;
