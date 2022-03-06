import mongoose from "mongoose"
const {Schema, model} = mongoose

const PostSchema = new Schema(
  {
    name: String,
    size: Number, 
    key: String, 
    url: String
  }, 
  {
    timestamps: true,
  });

const Post = model("Post", PostSchema);

export default Post
