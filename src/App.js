import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import {useState} from "react"

const api = {
  key: "d609e8e2dba871fe91944ea37e7fc70b",
  base:"https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [search,setSearch]= useState("")
  const [weather, setWeather] = useState({})

  const searchPressed = () =>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) =>{
      setWeather(result);
      console.log(result);
    })
  } 

  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center mt-5 text-white'>Weather App</h1>
        <div className='container col-md-5 m-auto mt-2 mb-4'>
          <input 
            className='form-control mt-5 mb-3'
            type="text"
            placeholder="Search City..." 
            onChange={(e) => setSearch(e.target.value)}/>
          <div className="text-center">
            <button className='btn btn-success' onClick={searchPressed}>Search</button>
          </div>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div className='info'>
            <p className='text-center text-white'>Country: {weather.sys.country}</p>
            <p className='text-center text-white'>City: {weather.name}</p>
            <p className='text-center text-white'>Temperature: {weather.main.temp}°C</p>
            <p className='text-center text-white'>Feels Like: {weather.main.feels_like}</p>
            <p className='text-center text-white'>Condition: {weather.weather[0].main}</p>
            <p className='text-center text-white'>Condition: ({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
