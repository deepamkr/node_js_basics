console.log('Starting')

setTimeout(()=>{
    console.log('2 Second timer')
},2000)
setTimeout(()=>{
    console.log('0 Second Timer')
},0)
console.log('Stopping')

//////////////////////////////////////////////////////////////////
const postmanRequest =require('postman-request')

const url ='http://api.weatherstack.com/current?access_key=8754204f648e9cc33b73409d17af9ed3&query=25.777140,87.475258&units=f'

postmanRequest({url: url,json: true},(error,response)=>{
    // console.log(response.body.current.feelslike)
    //console.log(`It is ${getData(temperature)} but It feels like ${getData(feelslike)}`)
    console.log(`It is ${response.body.current.temperature} fahrenheit out but It feels like ${response.body.current.feelslike}. It is currentlty ${response.body.current.weather_descriptions[0]}`)
})
//Geocoding
//Address-> Lat/Long->weather


const geoUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVlcGFta3IiLCJhIjoiY2xkMnhweGdiMGRjaTNwb2dheno4bXRodiJ9.C3NCWDRuGLROfuGWBHayOQ&limit=1'

postmanRequest({url:geoUrl,json:true},(error,response) =>{
    const latitude =response.body.features[0].center[1]
    const longitude =response.body.features[0].center[0]
    console.log(latitude,longitude)
})
/////////////////////////////////////////////////
//Geocoding using mapbox
//Address-> Lat/Long->weather


//const geoUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVlcGFta3IiLCJhIjoiY2xkMnhweGdiMGRjaTNwb2dheno4bXRodiJ9.C3NCWDRuGLROfuGWBHayOQ&limit=1'

postmanRequest({url:geoUrl,json:true},(error,response) =>{
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})
///////////////////////////////////////////////////////////////////
//const url ='http://api.weatherstack.com/current?access_key=28729cddbd8d19f93cdde736f1957136&query=25.777140,87.475258&units=f'

postmanRequest({url: url,json: true},(error,response)=>{
    //console.log(response.body.current.feelslike)
    //console.log(`It is ${getData(temperature)} but It feels like ${getData(feelslike)}`)
    if(error)
    {
        console.log(('Unable to connect to weather service'))
    }
    else if(response.body.error){
        console.log('Unable to find location')

    } 
    else{
    console.log(`It is ${response.body.current.temperature} fahrenheit out but It feels like ${response.body.current.feelslike}. It is currently ${response.body.current.weather_descriptions[0]}`)
    }
})