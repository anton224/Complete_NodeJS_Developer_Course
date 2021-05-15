
// Object property shorthand

const name = 'Andreq'
const userAge = 27

const user = {
    name,
    age: userAge,
    locatoin: 'Boston'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3, 
    stock: 201,
    salePrice: undefined
}

const {label: productLabel, stock, rating, defaultProperty = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating) // undefined
console.log(defaultProperty) // default value -> 5


const transaction = (type, {label, stock}) => {
    console.log(label, stock)
}

transaction('order', product)
