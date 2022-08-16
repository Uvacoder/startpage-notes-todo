import getTime from "./getTime"
import TodoSec from './components/TodoSec'
import Notes from "./components/Notes";
import Weather from "./components/Weather";
import Time from "./components/Time";
import { useEffect, useState } from 'react';
import { createApi } from "unsplash-js"



const api = createApi({
    accessKey:"2GqxttV2wnvK5CUd16C_S7NCKsdmS-l20qr637BKzVo"
})


function App() {
  const [showTodo, setShowTodo] = useState(false)
  const [showEditor, setShowEditor] = useState(false)
  const [weatherInfo, setWeatherInfo] = useState(false)
  const [time, setTime] = useState("")

  // gets time immediately on render
  useEffect(()=>{
    setTime(getTime())
  },[])

  //sets timer to update time
  setInterval(()=>{
      setTime(getTime())
  }, 1000)

  //gets weather to pass as prop
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude.toFixed(2)
        const userLon = position.coords.longitude.toFixed(2)
        const weatherAPIkey = "e02944c0d1d98fbccd5ecb3d5676e167"
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLon}&appid=${weatherAPIkey}&units=imperial`)
        .then(res => {
            if (!res.ok){
                throw Error('Weather data not available.')
            }
            return res.json()
        })
        .then(data => {
            setWeatherInfo(data)
          }) 
        .catch(err => console.error(err))
        })

}, [])
  useEffect(()=>{
    api.search
        .getPhotos({query:"nature", orientation:'landscape'})
        .then(results =>{
            document.body.style.backgroundImage = `url(${results.response.results[4].urls.full})`
        })  
        .catch(err => console.log(err))

  }, [])


  return (


    <div className="App">
      <nav>
        <i className="fa-regular fa-circle-check todo-icon" onClick={()=>{setShowTodo(!showTodo)}} />
        <i className="fa-solid fa-file-pen notes-icon" onClick={()=>{setShowEditor(!showEditor)}} />
      </nav>
      {showTodo && <TodoSec exitTodo={()=> setShowTodo(false)}/>}
      {showEditor && <Notes />}
      <Time time={time} />
      {weatherInfo && <Weather weatherInfo={weatherInfo}/>}
    </div>
    


  );
}

export default App;
