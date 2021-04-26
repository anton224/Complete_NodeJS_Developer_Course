const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const dataJSON = JSON.parse(dataString)
dataJSON.name = 'My Name'
dataJSON.age = 34
fs.writeFileSync('1-json.json',JSON.stringify(dataJSON))

