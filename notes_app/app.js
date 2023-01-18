
const chalk = require('chalk')
const yargs= require('yargs')
const notes= require('./notes.js')

// console.log(process.argv)
// console.log(yargs.argv)
//console.log(notes.getNotes())
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
    handler(argv)
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
    builder:{
        title:{
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv)
    {
        console.log('Removing the new Title!')
        notes.removeNote(argv.title)
    }
})
// create a list command
yargs.command({
    command:'list',
    describe: 'List your notes',
    handler()
    {
        console.log('Listing out all notes')
       notes.listNotes()
    }
})
// create a read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler(argv)
    {
        console.log('Reading a note')
        notes.readNotes(argv.title)
    }
})
yargs.parse();
// add,remove,read,list
//console.log(yargs.argv)
