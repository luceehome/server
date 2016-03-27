import express from 'express';
import fhemHttp from '../../modules/fhem-http';

const router = express.Router();

router.post('/', (req, res) => {
  const command = req.body.cmd;
  fhemHttp.command(command).subscribe(
    () => {
      res.json({success: true});
    },
    () => {
      res.json({success: false});
    },
    () => {
      console.log('Sent command to fhem: ' + command);
    }
  );
});

export default router;
