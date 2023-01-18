const book={
    title: 'Ego is the Ememy',
    author: 'Ryan Holiday'
}

const bookJson= JSON.stringify(book)
console.log(bookJson)

const parsedData = JSON.parse(bookJson)
console.log(parsedData.author)

////////////////////////////////////////////////
const dataBuffer =fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
////////////////////////////////////////
//without refactor the app.js for functions
const fs= require('fs')
const chalk = require('chalk')
const getNotes = ()=>"Your notes......"

// the main function for the adding the data
const addNote = function(title,body)
{
    const notes=loadNotes()
    const duplicateNotes = notes.filter( (note)=>note.title===title)
    if (duplicateNotes.length===0) 
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New notes added!'))
    }
    else{
        console.log(chalk.red.bold('Note title taken!'))
    }
    
}
const removeNote =function(title)
{
    const notes=loadNotes()
    const removedNotes= notes.filter(function(note)
    {
        return note.title!==title;
    })
    // console.log(removedNotes,notes)
    if(removedNotes.length===notes.length)
    {
        console.log(chalk.red.bold('Title Not available'))
    }
    else{
        saveNotes(removedNotes)
        console.log(chalk.green.bold('Title removed'))
    }
    
    //console.log(title)
}
// function made for saving the data reusable function

const saveNotes= function(notes){
    const dataJSON = JSON.stringify(notes)// json.stringify to convert to json 
    fs.writeFileSync('notes.json',dataJSON) // ** probably replace the file woth new content
}

//for loading the data
const loadNotes= function()
{   
    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
        
    
}

module.exports ={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
/////////////////////
//arrow functions
const remainingTasks = this.tasks.filter((task)=>
        {
            return task.completed===false
        })
        return remainingTasks