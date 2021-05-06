const { url } = require('node:inspector')
const request = require('request')


const forcast = (lat, lan, callback) => {

    request({url: url, json: true}, (error, response) => {
        if (error){
            callback('Error message ' + error)
        }else if(response.body.message){
            callback('Error getting the data')
        }else{
            callback(undefined, response.current.temperature)
        }
    })
}


module.exports = {
    forcast: forcast
}