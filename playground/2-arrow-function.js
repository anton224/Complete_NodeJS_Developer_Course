// Example 1
/*
const val = 2
const outSquare = function(x){return x * val}
const outSquareArrow = (x) => {return x * val}
console.log(outSquare(3)) // 6
console.log(outSquareArrow(3)) // 6
*/
/*
// Example 2
let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
setTimeout(user.sayHi(), 1); // Hello, undefined!
// Solution
const f = user.sayHi.bind(user)
setTimeout(f, 1); // Hello, John
*/


// Example 3
/*
const square1 = function (x) { return x * x }
const square2 = (x) => { return x * x }
const square3 = (x) => x * x 
*/

// Example 4
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

//*/