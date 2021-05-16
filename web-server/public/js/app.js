console.log('Client side js file is loaded')
const base_url = 'http://api.weatherstack.com/current?access_key=4930af6479899c8d2cd6b6a84a597a5d&query='

const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const message_one = document.querySelector('#message-1')
const message_two  = document.querySelector('#message-2')

// message_one.textContent = 'From JS'

weather_form.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value
    const url = base_url + location
    message_one.textContent = 'Loading Forcast...'
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.error){
            message_one.textContent = data.error.info
            message_two.textContent = ''
            console.log(data.error.info);
        }else {
            console.log(data)
            message_one.textContent = data.location.name
            message_two.textContent = data.current.temperature
            console.log(data.current.temperature)
        }
    })
    console.log(location)
})

