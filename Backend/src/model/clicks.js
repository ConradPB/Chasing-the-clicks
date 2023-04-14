import mongoose from "mongoose"

const clickCountSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0
  }
});

const clickCount = mongoose.model('clickCount', clickCountSchema);

export default clickCount
