const express = require('express'); //gives access to express server
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

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

//colons show variables viewed as params(id)
app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user:req.params.id
    })
})

//POST
app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if(username===mockUsername && password===mockPassword){
        //use JWT method here to make encrypted token (password)
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match!'
        })
    }
})

//app.listen method starts the server locally on localhost:8000
app.listen(8000, function() {console.log("server is running")})
