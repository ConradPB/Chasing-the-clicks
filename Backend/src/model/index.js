import mongoose from "mongoose";
import Click from "./click";

const connectDb = () => {
  return mongoose.connect(env.MONGO_URI);
}
mongoose.set('strictQuery', true) //enables strict query mode in mongoDB


const model = { Click };

export { connectDb }

export default model