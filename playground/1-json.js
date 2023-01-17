const fs= require('fs')
// const book={
//     title: 'Ego is the Ememy',
//     author: 'Ryan Holiday'
// }

// const bookJSON= JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJSON)
 
//read the json file -> change to string then parse to get the contents.....
// const dataBuffer =fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer =fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name= "Deepam"
user.age="23"

//again change the content in the json file by changind the new user to json and changing the content
const userJSON =JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)