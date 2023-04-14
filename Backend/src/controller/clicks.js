
import clickCount from '../model/clicks';


class ClickController {
    async getClicks(req, res) {
        const ClickCount = await clickCount.find();
        
        res.json({ count: ClickCount.count })
    }

    async postClicks(req, res) {
        const ClickCount = await clickCount.findOne();
        ClickCount.count++;
        await ClickCount.save();
        res.json({ count: ClickCount.count })
     }
  }
       


  
  export default ClickController;