const fs = require('fs')

const readStream = fs.createReadStream('./docs/file.txt', { encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/file1.txt')

readStream.on('data', (chunk) =>{
    console.log('----NEW CHUNK----')
    console.log(chunk)
    writeStream.write('\n NEW CHUNK \n')
    writeStream.write(chunk)
})

