const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));
app.use(require('./routes'));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
app.listen(PORT, ()=> console.log("server is running on port "+PORT))

