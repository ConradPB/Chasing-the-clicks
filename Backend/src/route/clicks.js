import express from 'express';
import ClickController from '../controller/clicks';


const router = express.Router()

  
router.get('/', ClickController.getClicks);

 
  

export default router
