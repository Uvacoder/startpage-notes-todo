export default function Weather({weatherInfo}){
    
    return(
        
        <div className="weather-container">
            <img className="weather-img" src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`} alt="" />
            <h2 className="weather-temp" id="temp">{Math.round(weatherInfo.main.temp)}° F</h2>
            <h2 className="weather-city">{weatherInfo.name}</h2>
        </div>
        
    )
}