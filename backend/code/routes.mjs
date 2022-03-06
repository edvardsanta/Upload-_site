import express from "express"
import uploadConfig from "./config/upload.mjs"
import Post from "./models/Post.mjs"
import multer from "multer"
const routes = express.Router();
console.log(routes)
const uploadFile = multer(uploadConfig);
console.log(uploadFile);
routes.post("/posts", uploadFile.single('file'), async(req, res) =>
{
   const {file} = req.body;
   const {originalname: name, size: size, filename: key} = req.body;
   const post = await Post.create({
    name,
    size,
    key,
    url: " "
   });
   console.log(`name=${req.body.originalname}, size=${size}, key=${key}, file=${file}, req=${req}`);
   return res.json(post);
});
export default routes 
