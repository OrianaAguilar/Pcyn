const express = require('express')
const app = express()
const port = 3000
const urls = require('./urls');

app.use("/", urls)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
