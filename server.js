const express = require('express')

const PORT = process.env.ENV_PORT || 3000
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.listen(PORT, (err) => {
  if (err) return console.log(err)

  console.log(`Server is running on port ${PORT}`)
})
