import mongoose from "mongoose"

const clickSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0
  }
});

const Click = mongoose.model('click', clickSchema)

export default Click