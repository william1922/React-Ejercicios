import { useState } from "react"

const Ejercicio13 = () => {
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");

  const getCords = async() => {

    try {
      const result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Lima,PE&appid=47a31d010f6123003ec243fe1cc303ae`)
      const data = await result.json();
      setLatitud(data[0].lat)
      setLongitud(data[0].lon)
      console.log(data)
   } catch (error) {
      console.log(error)
   }
  
  }

  const getWeather = async() => {

    try {
      const result = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=47a31d010f6123003ec243fe1cc303ae`);
      const data = await result.json();
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Ejercicio13
      </h1>
      <button onClick={getCords}>click</button>
      <button onClick={getWeather}>click</button>
      </div>
  )
}

export default Ejercicio13