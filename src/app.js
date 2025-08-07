const path = require('path');
const express = require('express');
const hbs = require('hbs')

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')// Define paths for views and partials


// Set up handlebars engine and views location
app.set("view engine", "hbs");
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);// Register partials for handlebars

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Define routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Vinay Bhatt'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        name: 'Vinay Bhatt'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        msg: 'This is the help page.',
        name: 'Vinay Bhatt'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, { Latitude, Longitude, location } = {}) => {   //calback chaining
        if (error) {
            return res.send({ error })
        }

        forecast(Latitude, Longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                forecast: forecastData,
                Location: location,
                Address: req.query.address
            })
        });
    });


})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products: [],
    })
})

app.use('/help', (req, res) => {
    res.render('404', {
        title: 'Help page not found',
        name: 'Vinay Bhatt',
        errorMessage: 'Please visit the help page for assistance.',
    })
});

app.use((req, res) => {
    res.render('404', {
        title: '404 Page Not Found',
        name: 'Vinay Bhatt',
        errorMessage: 'The page you are looking for does not exist.',

    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})


