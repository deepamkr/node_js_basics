const fs= require('fs')
const chalk = require('chalk')
const getNotes = ()=>"Your notes......"

// the main function for the adding the data
const addNote = (title,body)=>
{
    const notes=loadNotes()
   // const duplicateNotes = notes.filter((note)=>note.title===title)
    const duplicateNote = notes.find((note)=>note.title===title)

    //debugger

    if (!duplicateNote) 
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New notes added!'))
    }
    else{
        console.log(chalk.red.bold.inverse('Note title taken!'))
    }
    
}
const removeNote =(title)=>
{
    const notes=loadNotes()
    const removedNotes= notes.filter((note)=> note.title!==title)
    // console.log(removedNotes,notes)
    if(removedNotes.length===notes.length)
    {
        console.log(chalk.red.bold.inverse('Title Not available'))
    }
    else{
        saveNotes(removedNotes)
        console.log(chalk.green.bold('Title removed'))
    }
    
    //console.log(title)
}
const listNotes =()=>
{
    const notes=loadNotes()
    notes.forEach(note => {
         console.log(note.title)
        
    })
}
const readNotes =(title)=>
{   const notes=loadNotes()
    console.log('Your note is:')
    const foundNote =notes.find((note)=> note.title===title)
    if(foundNote){
        console.log(chalk.red.bold.inverse(foundNote.body))
    }
}
// function made for saving the data reusable function

const saveNotes=(notes)=>{
    const dataJSON = JSON.stringify(notes)// json.stringify to convert to json 
    fs.writeFileSync('notes.json',dataJSON) // ** probably replace the file woth new content
}

//for loading the data
const loadNotes= ()=>
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
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}