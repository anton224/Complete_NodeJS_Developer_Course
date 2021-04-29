
const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0');

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            type: string,
            describe: 'A title',
            demandOption: true
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            'describe': 'The note itself',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)        
    }
});

// yargs.command({
//     command: "remove",
//     describe: "Description",
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true, // set required true
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         console.log("Removing the note!", argv.title)
//     }
// });

yargs.command({
    command: "list",
    describe: "List all the notes",
    handler() {
        notes.listNotes()
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Note\'s title',
            type: string,
            demandOption: true
        }
    },
    handler: function(argv){
        console.log("Reading a note!")
        notes.readNote(argv.title)
    }
});

// yargs.parse();
console.log(yargs.argv)

