const express = require('express'); //gives access to express server
const app = express();


//app.listen method starts the server locally on localhost:8000
app.listen(8000, function() {
    console.log("server is running")
})