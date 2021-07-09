const express = require('express')
const exphbs = require('express-handlebars')
const passwordGenerator = require('./password_generator.js')
const app = express()
const port = 3000

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set static file route
app.use(express.static('public'))

//set body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = passwordGenerator(req.body)
  res.render('index', { password, options })
})

app.listen(port, () => {
  console.log('online')
})