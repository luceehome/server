import express from 'express';
import request from 'request';

const router = express.Router();

router.patch('/', (req, res) => {
  const address = 'http://' + req.body.address;

  request.get(address, error => {
    if (error) {
      console.error('An error occurred. Check the provided address.', error);
    }
    else {
      console.info('Found fhem instance at ', address);
    }
  });

  res.send('Hello World!');
});

export default router;
