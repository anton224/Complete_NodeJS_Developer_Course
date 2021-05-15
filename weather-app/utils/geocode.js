const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=2&access_token=pk.eyJ1IjoiYW50b24xMTQiLCJhIjoiY2tvNWM3dHNzMDBkMjJvbngxNzNqaHR2OCJ9.JMtYc2dh6f4tjtWe6GC5qA`
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to the service.')
        }else if (body.message){
            callback('Unable to find the location')
        }else{
            callback(undefined,{
                lon: body.features[0].center[0],
                lat: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode