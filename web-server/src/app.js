const path = require('path')
const hbs = require('hbs')
const express = require('express')

const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const app = express()

// Define paths for Express config
const public_dir_path = path.join(__dirname, '../public')
const views_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')

// Setupe handlebars engine and views location
app.set('view engine','hbs')
app.set('views',views_path)
hbs.registerPartials(partials_path)

// Setup static directory to serve
app.use(express.static(public_dir_path))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Anton'
    })
})


app.get('/about', (req,res) => {
    res.render('about', {
        title: 'Aboue me',
        name: 'Anton'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help page',
        message: 'Help message',
        name: 'Anton'
    })
})

app.get('/products', (req,res)=> {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        products: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        error_message: 'Help article not found',
        title: '404',
        name: 'Anton'
    })
})

app.get('/weather', (req,res) => {
    const address = req.query.address
    if(!address){
        return res.send({
            error: 'You must provide an address parameter'
        })
    }
    geocode(address, (error, {lon, lat, locatoin} = {}) => {
        if(error)
            return res.send({
                error: 'Error in geocode: ',
                message: error
            })
        forcast(lat, lon, (error, forecastData) => {
            if(error)
                return res.send({
                    error: 'Error in forcast ',
                    message: error
                })
            res.send({
                forecast: forecastData,
                location: locatoin,
                address:  address
            })
        })
    })
    
})

app.get('*', (req,res) => {
    res.render('404', {
        error_message: 'Page not found',
        title: '404',
        name: 'Anton'
    })
})

app.listen(3000, () => {
    console.log('Server is up in port 3000')
})

