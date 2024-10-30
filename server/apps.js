const express = require('express') //this invokes the express function

// express app
const app = express()

//listen for requests 
app.listen(3000)

app.get('/', (req, res) =>{    //it takes in 2 arguments: what aprt of the url you want to listen to
    //res.send('<p>Home Page</p>')
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) =>{    
    //res.send('<p>About Page</p>')
    res.sendFile('./views/about.html', {root: __dirname})
})

//REDIRECTS
app.get('/about-me', (req,res) =>{
    res.redirect('/about')
})

// 404 page
app.use((req, res) =>{
    res.sendFile('./views/404.html', {root: __dirname})
})