const square1 = function (x) {
     return x * x
}

const square2 = (x) => {
    return x * x
}

const square3 = (x) => x * x 


const myEvent = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Mike', 'Jen'],
    printGuestList: function() {
        console.log('Guest List : ' + this.name)
    },
    printGuestListArrow: () => {
        console.log('Guest List : ' + this.name)
    },
    //printGuestListNewArrow: function() {
    printGuestListNewArrow() {
        var name2 = 'anton'
        console.log('Guest List : ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name )
        })
        this.guestList.forEach(function(guest) {
            console.log(guest + ' is attending ' + name2 )
        })
    }
}

myEvent.printGuestList()
myEvent.printGuestListArrow()
myEvent.printGuestListNewArrow()


const myObj =  {

myFunc: function() {},
myFunc2() {},
myFunc3: () => {}
}
