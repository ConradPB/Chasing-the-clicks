import express from 'express';
import ClickController from '../controller/clicks';


const router = express.Router()

const Click = new ClickController()
  
router.get('/', Click.getClicks);

router.post('/', Click.postClicks)
 
  

export default router
