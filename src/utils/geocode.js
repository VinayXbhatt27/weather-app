const request = require('request');

const geocode=(address,callback)=>{
    const url="https://api.positionstack.com/v1/forward?access_key=08e4ab6c64d5e26ec3419634bcd31304&query="+encodeURIComponent(address)+"&limit=1";
    //encodeURIComponent() is used to encode the address so that it can be safely included in a URL
    request({url:url,json: true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services', undefined);
        //error message for when the request fails and undefined is passed as the second argument to the callback

        }else if(body.error || body.data.length === 0){
            callback('Unable to find location. Try another search', undefined);
        }else{
            callback(undefined,{
                Latitude: body.data[0].latitude,
                // Extract latitude from the response body
                Longitude: body.data[0].longitude,
                // Extract longitude from the response body
                location: body.data[0].name+','+body.data[0].region+","+body.data[0].country
            })
        }
    })
}



module.exports=geocode
