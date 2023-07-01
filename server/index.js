const express = require('express')
const app = express()
const port = 4000
const mongoose=require('mongoose');


mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.uyqbfjh.mongodb.net/gofoodmern?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected Successfully"))
  .catch((err) => {
    console.error("failed");
  });
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5174");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:5174");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.sendStatus(200);
    } else {
      next();
    }
  });
  

app.use(express.json())
app.use('/api',require("./Routes/Student.Route"));
//app.use('/api',require("./Routes/DisplayData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})