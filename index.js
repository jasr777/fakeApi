var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());



// Routers 

const usersRouter = require('./api/users')
const claimsRouter = require('./api/claims')
const zonesRouter = require('./api/zones')

app.use('/api/users', usersRouter)
app.use('/api/claims', claimsRouter)
app.use('/api/zones' , zonesRouter)

app.listen(3000, () =>{
    console.log('Server listening on port 3000')
})