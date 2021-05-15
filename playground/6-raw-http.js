const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=4930af6479899c8d2cd6b6a84a597a5d&query=45,-76'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error occured : ' , error)
})

request.end()