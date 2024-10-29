const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) =>{
    console.log( req.url, req.method)

    //set header content type
    res.setHeader('Content-Type', 'text/html')

    let path = './views/'
    switch(req.url){ //the req.url is taken in as input
        case '/':
            path += 'index.html'
            res.statusCode =200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.setHeader('Location', '/about')
            res.statusCode = 301
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }
    
    // send an html file
    fs.readFile(path, (err, data) =>{ // path is a variable for location. It could have been the location './views/index.html'
        if (err){
            console.log(err)
            res.end()
        } else{
            res.write(data)
            res.end()
        }     
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000')
})