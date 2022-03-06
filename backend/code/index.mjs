import express from "express"
import mongoose from "mongoose"
import routes from "./routes.mjs"
import morgan from "morgan"
const app = express();
//database
const mongoAtlasUri = "mongodb+srv://Edu:edu152535@cluster0.n7ksw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
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
