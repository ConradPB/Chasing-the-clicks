import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(3000, () =>
  console.log(`App is running on ${process.env.PORT} !`),
);