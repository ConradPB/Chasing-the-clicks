import sample_data from '../model/clicks';

class ClickController {
        static getClicks(req, res) {
      res.json(sample_data);
    }
  }
  
  export default ClickController;