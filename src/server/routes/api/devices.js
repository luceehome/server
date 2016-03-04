import express from 'express';
import fhemJsonlist2 from '../../modules/fhem-jsonlist2';

const router = express.Router();

router.get('/', (req, res) => {
  fhemJsonlist2.all().subscribe(
    body => {
      res.json({data: body});
    },
    () => {
      res.send('An error occurred.');
    }
  );
});

export default router;
