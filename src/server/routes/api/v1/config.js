import express from 'express';

const router = express.Router();

router.patch('/', (req, res) => {
  console.log('request was', req.body);

  res.send('Hello World!');
});

export default router;
