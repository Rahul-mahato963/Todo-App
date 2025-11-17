import mongoose from "mongoose"
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});
const todomodel = mongoose.model("Todo", todoSchema);
export default todomodel;