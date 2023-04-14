import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import clicksRoute from './route/clicks'
import { connectDb } from './model'

const app = express()

connectDb().then(() => {

  console.log('MongoDB connected');
}).catch((err) => {
  console.log(`MongoDB connection error: ${err}`);

})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/clicks', clicksRoute)








app.listen(process.env.PORT, () =>
  console.log(`App is running on PORT ${process.env.PORT}!`),
);