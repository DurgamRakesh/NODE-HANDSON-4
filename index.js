const express = require('express');
const bodyParser = require("body-parser");
const CONSTANTS = require('./config/Constant');
const loginRoute = require('./routes/loginroute');
const registerRoute = require('./routes/registerroute');

const app = express();

app.use(bodyParser.json());
app.use(loginRoute);
app.use(registerRoute);

app.listen(CONSTANTS.PORT_NUMBER, ()=>{
    console.log(`Server is listening at http://localhost:${CONSTANTS.PORT_NUMBER}`)
})