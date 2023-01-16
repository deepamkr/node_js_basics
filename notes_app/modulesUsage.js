
const validator= require('validator')


const chalk = require('chalk')
const getNotes= require('./notes.js')

const msg= getNotes()
console.log(msg)

//FOR VALIDATOR
console.log(validator.isEmail('deepam@gmail.com'))
console.log(validator.isURL('https://hello.com'))

const greenMsg= chalk.green.inverse.bold(msg)
console.log(chalk.red('Hello world!'))
console.log(greenMsg)

console.log(process.argv[2])