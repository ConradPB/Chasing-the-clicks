import express from 'express';

const router = express.Router()

function generate_clicks(num_clicks) {
    const clicks = {};
    for (let i = 1; i <= num_clicks; i++) {
      clicks[i] = {
        id: i.toString(),
        username: `User ${i}`
      };
    }
    return clicks;
  }
  
  const sample_data = generate_clicks(2);
  
  router.get('/', (req, res) => {
    res.json(sample_data);
  });

 router.post('/clicks', (req, res) => {
    return res.send('Received a POST HTTP method');
  })
  

export default router
