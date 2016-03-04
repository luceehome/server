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

router.get('/:name', (req, res) => {
  const name = req.params.name;

  fhemJsonlist2.byName(name).subscribe(
    device => {
      res.json({success: true, data: device});
    },
    error => {
      res.json({success: false, error: 'There is an error, bro.'})
    }
  );
});

export default router;
