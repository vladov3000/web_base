var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('pug').compileFile(__dirname + '/source/templates/homepage.pug')
  , template1 = require('pug').compileFile(__dirname + '/source/templates/aboutpage.pug')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/about', function (req, res, next) {
  try {
    var html = template1({ title: 'About' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
