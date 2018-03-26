const  express = require('express'),
    app = express()
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./routes/routing')
const port = 4000
const session = require('express-session')

app
    .use(express.static('views'))
    .use(express.static(path.join(__dirname, 'static')))
    .set('view engine', 'ejs')
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(session({
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true,
        cookie: { secure: true }
      }))

// Tell express to use this router
app.use('/', router)    

app.listen(port, function () {
    console.log(`localhost:${port} - Lets go Baby!`);
});
