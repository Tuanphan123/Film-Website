const express = require("express");
const app = express();
const mongoose = require("mongoose");
const doten = require("dotenv");
const movieRoute = require("/Build Projects/Film App/api/routes/movies");
const listRoute = require("/Build Projects/Film App/api/routes/lists");

doten.config();
mongoose.connect(process.env.MONGO_URL,{

})
.then(() => console.log("DB connection successfull"))
.catch(err => console.log(err));

app.listen(8800, () =>{
    console.log("backend server is running")
});
app.use("/Build Projects/Film App/api/routes/movies", movieRoute);
app.use("/Build Projects/Film App/api/routes/lists", listRoute);