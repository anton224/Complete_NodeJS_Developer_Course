const geocode = (address, callback) => {
    const urlMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?limit=2&access_token=pk.eyJ1IjoiYW50b24xMTQiLCJhIjoiY2tvNWM3dHNzMDBkMjJvbngxNzNqaHR2OCJ9.JMtYc2dh6f4tjtWe6GC5qA`
    request({url : urlMapbox, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to the service.')
        }else if (response.body.message){
            callback('Unable to find the location')
        }else{
            callback(undefined,{
                lan: response.body.features[0].center[0],
                lat: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = {
    geocode: geocode
}