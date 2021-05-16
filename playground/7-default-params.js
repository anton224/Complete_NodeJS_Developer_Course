const greeter = (name = 'Default Name') => {
    console.log('Hello ' + name)
}

greeter() // greeter('Andrew')

const destructFunction = ({name, age = 10} = {}) => {
    console.log(name,age)
}

const user = {
    name: 'Anton',
    age: 29
}

destructFunction() // destructFunction(user)
// Output : undefined 10