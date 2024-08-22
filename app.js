const express = require('express');

const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require("body-parser");



const app = express();
const port = process.env.PORT || 3000;
if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
}

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  console.log("Hi");
  res.send('Hello from ShareEz!')
})

// Route Imports

const user = require("./routes/users");

app.use("/api/v1/user", user);

app.listen(port, () => {
  console.log(`ShareEz app listening on port ${port}`)
})


// This line is written by Umesh