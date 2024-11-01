const express = require('express') //this invokes the express function

// express app
const app = express()

//register view engine
app.set('view engine', 'ejs')

//listen for requests 
app.listen(3000)

app.get('/', (req, res) =>{    //it takes in 2 arguments: what part of the url you want to listen to
    //res.send('<p>Home Page</p>')
    const blogs = [
        {title: 'Ire wakes up', snippet: 'orem ipsum dolor sit amet consectetur'},
        {title: 'Ire presses his phone', snippet: 'orem ipsum dolor sit amet consectetur'},
        {title: 'Ire writes some codes', snippet: 'orem ipsum dolor sit amet consectetur'}
    ]
    res.render('index', {title:'Home', blogs:blogs})
})

app.get('/about', (req, res) =>{    
    //res.send('<p>About Page</p>')
    res.render('about', {title:'About'})
})

//REDIRECTS
//app.get('/about-me', (req,res) =>{
//    res.redirect('/about')
//})


app.get('/blogs/create', (req,res) =>{
    res.render('create', {title:'Create'})
})

// 404 page
app.use((req, res) =>{
    res.status(404).render('404', {title:'404'})
})