const express = require('express')
const port = 3000
const homeRoute = require('./routes/site.route')
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route')
const cookieParser = require('cookie-parser')
const app = express()
const bodyParser = require('body-parser')


app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users', userRoute)
app.use('/auth', authRoute)
app.use('/', homeRoute)

app.use(express.static('public'))

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})