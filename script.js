const searchBox = document.querySelector('.inputBox');
const searchBtn = document.querySelector('.searchBtn');
const conditionImage = document.querySelector('.conditionImage');
const temparature = document.querySelector('.temparature');
const condition = document.querySelector('.condition');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');
const error = document.querySelector('.error');

searchBtn.addEventListener('click',()=>{
    let query = searchBox.value;
    let apikey = '224b440e879b4a24bef141608240202';

    let url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${query}=no`;
    if(!query){
        error.style.display = "block";
    }else{
        fetch(url).then((response)=>{
            if(!response.ok){
                throw new Error('Network response was not of: ${response.statusText');
            }
            return response.json()
        }).then(data =>{
            let weatherReport = data.current;
            console.log(weatherReport);
            conditionImage.src = `http:${weatherReport.condition.icon}`
            temparature.innerHTML = `${weatherReport.temp_c}°C`
            condition.innerHTML = weatherReport.condition.text;
            humidity.innerHTML =`Humidity : ${weatherReport.humidity}%`
            windspeed.innerHTML = `Wind Speed : ${weatherReport.wind_kph}km/h`

        }).catch(arr =>{
            error.style.display ='black';
            error.innerHTML = 'location not matched';
        })
    }
})


