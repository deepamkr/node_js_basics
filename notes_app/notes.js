const fs= require('fs')
const getNotes = function()
{
    return "Your notes......"
}
// the main function for the adding the data
const addNote = function(title,body)
{
    const notes=loadNotes()
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
   // console.log(notes)
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
    addNote: addNote
}