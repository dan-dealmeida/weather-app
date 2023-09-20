const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=ba23243d98c8e9f4958bcac1b4d00f4c&query=37.8267,-122.4233'

request({url:url, json:true}, (error, response) =>{
    const temp = response.body.current.temperature
    const precip = response.body.current.precip

    console.log('It is currently '+ temp+ ' degrees out. There is a ' + precip + '% chance of rain.' )
})