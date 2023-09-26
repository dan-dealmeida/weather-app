const request = require('request')

const urlWeather = 'http://api.weatherstack.com/current?access_key=ba23243d98c8e9f4958bcac1b4d00f4c&query=37.8267,-122.4233'
const urlMap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFuaWVsZGVhbG1laWRhIiwiYSI6ImNsbXM1M2lhZjAwc24ycnA5ZXhxdnpuZjQifQ.MFMxCnC6mfFfQy6zhC8MJg&limit=1'



// request({url:urlWeather, json:true}, (error, response) =>{
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     }else{
//         const temp = response.body.current.temperature
//         const precip = response.body.current.precip
//         const weather_description = response.body.current.weather_descriptions[0]
//
//         console.log(weather_description + '. It is currently '+ temp+ ' degrees out. There is a ' + precip + '% chance of rain.' )
//     }
//
// })

//Geocoding
// request({url:urlMap, json:true}, (error, response) =>{
//     if (error){
//         console.log('Unable to connect to location services')
//     } else if (response.body.features.length === 0){
//         console.log('No matches found')
//     } else{
//         const lat = response.body.features[0].center[1]
//         const long = response.body.features[0].center[0]
//
//         console.log('latitude: '+lat)
//         console.log('longitude: '+long)
//     }
// })


const geoCode = (adress, callback) => {
    const url  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) +  '.json?access_token=pk.eyJ1IjoiZGFuaWVsZGVhbG1laWRhIiwiYSI6ImNsbXM1M2lhZjAwc24ycnA5ZXhxdnpuZjQifQ.MFMxCnC6mfFfQy6zhC8MJg&limit=1'
    request ({url:url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to location services.', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })

        }
    })
}

geoCode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

