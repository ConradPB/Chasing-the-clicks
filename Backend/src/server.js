import 'dotenv/config'
import cors from 'cors'
import express, { urlencoded } from 'express'
import routes from './route' 

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/clicks', routes.click)







app.listen(process.env.PORT, () =>
  console.log(`App is running on ${process.env.PORT}!`),
);