const express = require('express')
const cors = require('cors')
const user = require(userRouter)
const app = express()
const port = 3000

app.use(cors)
app.get('/', (req, res) => {
  res.send('Hello from ShareEz!')
})

app.route("/api/v1/user");
app.get('/login', (req, res) => {
    res.send('Hello from Login!')
  })



app.listen(port, () => {
  console.log(`ShareEz app listening on port ${port}`)
})
