const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const adress = process.argv[2]
if (!adress) {
    console.log('Please provide an adress')
} else {
    geocode(adress, (error, { latitude, longitude, location } = {}) => {
        if (error){
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}

