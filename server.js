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

app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user:req.params.id
    })
})

//app.listen method starts the server locally on localhost:8000
app.listen(8000, function() {console.log("server is running")})
