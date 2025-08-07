console.log('This is the app.js file in the public directory.')


fetch('http://localhost:3000/weather?address=!').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log('Error: ' + data.error); // Logging error message if any
        } else {
            console.log('Location: '+data.Location); // Logging the location name
            console.log('Forecast: ' + data.forecast); // Logging the weather forecast
        }
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

// Adding event listener to the form for submission

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault() // Preventing the default form submission behavior
    const location = search.value // Getting the value from the input field
    
    messageOne.textContent = 'Loading...' // Displaying loading message in messageOne element
    messageTwo.textContent = '' // Clearing messageTwo element

    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error // Displaying error message in messageOne element
            messageTwo.textContent = '' // Clearing messageTwo if there's an error
        } else {
            messageOne.textContent =  data.Location // Displaying location in messageOne element
            messageTwo.textContent =  data.forecast // Displaying forecast in messageTwo element
        }
    })
})

});

