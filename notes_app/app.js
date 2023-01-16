const chalk = require('chalk')
const yargs= require('yargs')
const getNotes= require('./notes.js')

// console.log(process.argv)
// console.log(yargs.argv)

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe: 'Add a new note!',
    builder:{
        title:{
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function()
    {
        console.log('Adding a new note!')
    }
})
//create remove command
yargs.command({
    command:'remove',
    describe: 'Removing a note!',
    handler: function()
    {
        console.log('Removing the new note!')
    }
})
// create a list command
yargs.command({
    command:'list',
    describe: 'List your notes',
    handler: function()
    {
        console.log('Listing out all notes')
    }
})
// create a read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function()
    {
        console.log('Reading a note')
    }
})
// add,remove,read,list
console.log(yargs.argv)
