import fs from 'fs';
import express from 'express';
import fhemHttp from '../../modules/fhem-http';

const router = express.Router();

router.patch('/', (req, res) => {
  fhemHttp.setLocation(req.body.location).subscribe(
    () => {
      const file = './build/config.json';

      fs.writeFile(file, JSON.stringify({
          fhemLocation: req.body.location
        }),
        (err) => {
          if (err) {
            console.log(`An error occurred writing ${file}`);
            res.json({success: false});

            throw err;
          }
          else {
            console.log(`${file} written`);
            res.json({success: true});
          }
        });
    },
    () => {
      res.json({success: false});
    }
  );
});

export default router;
