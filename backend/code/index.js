import express from "express"
import mongoose from "mongoose"
import routes from "./routes.js"
import morgan from "morgan"
const app = express();
//database
const mongoAtlasUri = process.env.MDB_URL;

mongoose.connect(mongoAtlasUri, 
  {
     useNewUrlParser:true,
  }) 
  .then((x) =>
  { console.log ("Connected") })
  .catch((err) => 
  { console.error("Error connecting to mongo", err)});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes);
app.listen(8080);
