import sample_data from '../model/clicks';
import clickCount from '../model/clicks';
class ClickController {
        static async getClicks(req, res) {
     const clicks = await clickCount.find()
     request.json(clicks)
    }
  }
  
  export default ClickController;