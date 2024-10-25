// Global object

//console.log(global)

global.setTimeout(()=>{
    console.log('ERROR, mate')
    clearInterval(interval)
}, 3000) //this wil only set once

const interval = setInterval (()=>{
    console.log('In the interval')
}, 2000) // this will continue till infinity