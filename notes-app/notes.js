const fs = require('fs')
const chalk = require('chalk')
const fileName = 'notes.json'

const getNotes = () => {
    return "Your notes.."
}

const addNote = (title, body) => { 
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(`Adding a new note!`)
    }else{
        console.log('Note title taken!')
    }
    
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(fileName, dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)
    if(noteToKeep.length === notes.length)
        console.log(chalk.red('No note was found'))
    else{
        console.log(chalk.green('Note with the title was removed'))
        saveNotes(noteToKeep)
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)
    if(note)
        console.log(chalk.inverse('title : ' + note.title + ', body : ' + note.body))
    else
        console.log(chalk.red('Note not found'))
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync(fileName)
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    }catch(e){        
        return []
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes : "))
    notes.forEach(note => {
        console.log(note.title)
    });
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}