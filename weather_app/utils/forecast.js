const postmanRequest =require('postman-request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=28729cddbd8d19f93cdde736f1957136&query=' + latitude + ','+ longitude + '&units=f'
    postmanRequest({url: url,json: true},(error,response)=>{
        
        if(error)
        {
            callback('Unable to connect to weather service',undefined)
        }
        else if(response.body.error){
            callback('Unable to find location',undefined)
    
        } 
        else{
        console.log(`It is ${response.body.current.temperature} fahrenheit out but It feels like ${response.body.current.feelslike}. It is currently ${response.body.current.weather_descriptions[0]}`)
        }
})
}

module.exports=forecast