import express from 'express'
import bodyParser from "body-parser"
import routes from "../src/routes/image.js"
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
console.log(process.env, "????")
mongoose.connect(`mongodb://mongo:27017/Assignment`)
    .then((res) => {console.log("connection success")})
    .catch((err) => console.log("connection fail " + err));


mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(routes)


app.listen(process.env.PORT)