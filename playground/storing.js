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