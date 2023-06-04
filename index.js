

const express  = require("express");
const {default: mongoose} = require("mongoose");
const UserRoutes = require("./routes/UserRoutes");
const dotenv = require("dotenv");
const app = express();
console.log(dotenv.config());
app.use(express.json())
mongoose.connect(process.env.connstring).then(() => {
  console.log("Connected to MongoDB server");
});

app.use("/api/posts", UserRoutes);

app.listen(8000,() =>{
    console.log("App Started");
})