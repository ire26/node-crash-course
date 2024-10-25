const fs = require('fs')

// reading files
//fs.readFile('./docs/file.txt', (err, data)=>{
//    if (err) {
//        console.log(err)
//    }
//    console.log(data.toString)
//})



//writing files 

fs.writeFile('./docs/file.txt', 'Hello, world', ()=>{
    console.log('File was rewritten')
}) //this file was rewritten since it already existed

fs.writeFile('./docs/file2.txt', 'Hello, world', ()=>{
    console.log('File was just written')
}) // This file was crated since a file2.txt had not existed before



//directories

fs.mkdir('./assets', (err) => {
    if(err){
        console.log(err)
    }
    console.log('folder created')
})


//delete files

if(fs.existsSync('./docs/file1.txt')){
    fs.unlink('./docs/file1.txt', (err) => {
        if (err){
            console.log(err)
        }
        console.log('File has been deleted')
    })

}