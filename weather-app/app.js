const request = require('request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/focast')

getData('New York', (error,response) => {
    if(error){
        console.log(error)
    }else{
        const city = response.body.features[0].text
        const urlWeatherStack = 'http://api.weatherstack.com/current?access_key=4930af6479899c8d2cd6b6a84a597a5d&query=' + city
        getData(urlWeatherStack, (response) => {
            console.log('It is currently ' + response.body.current.temperature)
        })
    }
}, (err) => console.log(err))



geocode('New York',(error,data) => {
    if(error){
        console.log(error)
    }else {
        console.log(data)
    }
})

forcast(-75.7088, 44.1545, (error, data) => {
    console.log(error)
    console.log(data)
})
