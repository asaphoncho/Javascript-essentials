function showweatherDetails(event){
    event.preventDefault()
    const city = document.getElementById("city").value
    //const latitude = document.getElementById("latitude").value
    //const longitude = document.getElementById("longitude").value

    const apiKey = 'fee4854bc5a87d35ee3c13f620db46bf'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fee4854bc5a87d35ee3c13f620db46bf`
    fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById("weatherInfo")
                weatherInfo.innerHTML =  `<h2>Weather in ${data.name}</h2>
                                        <p>Temperature: ${data.main.temp} &#8451;</p>
                                        <p>Weather: ${data.weather[0].description}</p>`
            })
            .catch((err) => weatherInfo.innerHTML = `<p>Unable to find city</p>`)
}

document.getElementById("weatherForm").addEventListener('submit', showweatherDetails)