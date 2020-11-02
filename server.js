const express = require('express'); //gives access to express server
const app = express();

//mock JSON data
const mockUserData = [
    {name: 'Mark'},
    {name: 'Ann'}
]
//GET 
app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

//app.listen method starts the server locally on localhost:8000
app.listen(8000, function() {console.log("server is running")})
