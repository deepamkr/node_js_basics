
const chalk = require('chalk')
const yargs= require('yargs')
const notes= require('./notes.js')

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
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv)
    {
        // console.log('Title:',argv.title)
        // console.log('Body:',argv.body)
        notes.addNote(argv.title,argv.body)

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
yargs.parse();
// add,remove,read,list
//console.log(yargs.argv)
