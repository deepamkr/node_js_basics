//first program

const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Deepam.')

fs.appendFileSync('notes.txt', ' I am a node.js developer')
const add= require('./utils.js')
const sum=add(4,5)

console.log(sum)
///////////////////////////////////////
//parcing

const chalk = require('chalk')
const getNotes= require('./notes.js')
const yargs= require('yargs')
const command= process.argv[2]

if(command==='add'){
    console.log('Adding Value');

}  else if(command=='remove'){
    console.log('Removing note!')
}
