import mongoose from "mongoose";
import clickCount from "./clicks";


const connectDb = () => {
    return mongoose.connect(process.env.MONGO_URI);
  }
  mongoose.set('strictQuery', true) //enables strict query mode in mongoDB
  
  
  const models = { clickCount };
  
  export { connectDb }
  
  export default models

