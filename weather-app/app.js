const request = require('request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

console.log(JSON.stringify(process.argv))

const location = process.argv[2];

if(!location){
    console.log('No location was provided')
    return
}
geocode(location, (error, {lat, lon, location} = {}) => {

    if(error)
        return console.log('Error : ' + error)

    forcast(lat, lon, (error, forecastData) => {
        if(error)
            return console.log('Error : ' + error)

    console.log('Location : ' + location)
    console.log(forecastData)
    })
})





