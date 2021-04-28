const fs = require('fs')
const chalk = require('chalk')
const fileName = 'notes.json'

const getNotes = () => {
    return "Your notes.."
}

const addNote = (title, body) => { 
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes.length === 0){
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
const saveNotes = function (notes){
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

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync(fileName)
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    }catch(e){        
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}