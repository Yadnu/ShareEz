const express = require('express');


const bodyParser = require("body-parser");

const port = 3000;
const app = express();

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