import mongoose from "mongoose"

const clickCountSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0
  }
});

const ClickCount = mongoose.model('ClickCount', clickCountSchema);

export default clickCountSchema
