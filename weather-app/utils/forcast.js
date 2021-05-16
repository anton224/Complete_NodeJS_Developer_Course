const request = require('request')

const forcast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4930af6479899c8d2cd6b6a84a597a5d&query=' + lat + ',' + lon
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Error message ' + error, undefined)
        }else if(body.error){
            callback('Error getting the data - ' +  JSON.stringify(body.error.info), undefined)
        }else{
            // console.log(JSON.stringify(response))
            callback(undefined, 'The temperature is : ' + body.current.temperature)
        }
    })
}

module.exports = forcast