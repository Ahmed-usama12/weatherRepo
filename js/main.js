var city='cairo';
async function getWeather() {

    let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c8c79a92aa9e4159ab2184502230308&q=${city}&days=3`);
    let finalWeather = await weather.json();
    let date = new Date(finalWeather.forecast.forecastday[0].date);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dayNumber = date.getDate();
    let dayN = dayNames[date.getDay()];
    let monthN = monthNames[date.getMonth()];


    console.log(date);
    console.log(dayN);
    console.log(dayNumber);
    console.log(monthN);


    let todayWeather = {
        dayName: dayN,
        dayNum: dayNumber,
        monthName: monthN,
        locName: finalWeather.location.name,
        temp: finalWeather.current.temp_c,
        speed: finalWeather.current.gust_kph,
        wStatus: finalWeather.current.condition.text,
        windDir: finalWeather.current.wind_dir,
        icon: "https://" + finalWeather.current.condition.icon,

    }

    let tomorrowWeather={
        icon:"https://"+finalWeather.forecast.forecastday[1].day.condition.icon,
        max:finalWeather.forecast.forecastday[1].day.maxtemp_c,
        min:finalWeather.forecast.forecastday[1].day.mintemp_c,
        condition:finalWeather.forecast.forecastday[1].day.condition.text
    }

    let afterTomorrow={
        icon:"https://"+finalWeather.forecast.forecastday[2].day.condition.icon,
        max:finalWeather.forecast.forecastday[2].day.maxtemp_c,
        min:finalWeather.forecast.forecastday[2].day.mintemp_c,
        condition:finalWeather.forecast.forecastday[2].day.condition.text
    }



document.querySelector('.today').innerHTML=

        ` <div class="head d-flex justify-content-between align-items-center py-2">
    <h4>${todayWeather.dayName}</h4>
    <h4>${todayWeather.dayNum} ${todayWeather.monthName}</h4>
</div>
<h4 py-3>${todayWeather.locName}</h4>
<div class="temp d-flex justify-content-between align-items-center">
    <h1>${todayWeather.temp}<sup>o</sup>C</h1>
    <img src="${todayWeather.icon}"class='w-25 mt-5'>
</div>
<div class="weatherStatus">
<p>${todayWeather.wStatus}</p>

</div>
<div class="down d-flex justify-content-evenly align-items-center py-3">
    <span>20%</span>
    <span>${todayWeather.speed}Km/h</span>
    <span>East</span>
</div>
`

document.querySelector('.towmorrow').innerHTML=`                            <div class="towmorrowName">
<p>friday</p>
</div>
<div class="towmorrowIcon py-2">
<img src="${tomorrowWeather.icon}">

</div>
<div class="towmorrowTemp py-2">
<h3>${tomorrowWeather.max}<sup>o</sup>C</h3>
<p><small>${tomorrowWeather.min}<sup>o</sup>C</small> </p>
</div>
<div class="towmorrowStatus py-2">
<p>${tomorrowWeather.condition}</p>
</div>
</div>`




document.querySelector('.afTowmorrow').innerHTML=`
<div class="aftowmorrowName">
<p>friday</p>
</div>
<div class="aftowmorrowIcon py-2">
<img src="${afterTomorrow.icon}">

</div>
<div class="aftowmorrowTemp py-2">
<h3>${afterTomorrow.max}<sup>o</sup>C</h3>
<p><small>${afterTomorrow.min}<sup>o</sup>C</small>  </p>
</div>
<div class="aftowmorrowStatus py-2">
<p>${afterTomorrow.condition}</p>
</div>`

}
getWeather();



function searchLocation(){
    if(document.getElementById('searchCity').value!=null){
        city=document.getElementById('searchCity').value;
    }
    getWeather()
    console.log(city);
}