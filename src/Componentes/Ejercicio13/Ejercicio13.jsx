import { useEffect } from "react";
import { useState } from "react"

const Ejercicio13 = () => {
  const [cords, setCords] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const getCords = async(texto='lima,peru') => {
   
    try {
      const result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${texto}&appid=47a31d010f6123003ec243fe1cc303ae`)
      const data = await result.json();
      setLat(data[0].lat.toString())
      setLon(data[0].lon.toString())
      console.log(lat, lon)
      console.log(data)
   } catch (error) {
      console.log(error)
   }
  
  }

  
  const getWeather = async( long='8.8701539', lati='50.039186') => {
    try {
      const result = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&units=metric&lang=sp&appid=47a31d010f6123003ec243fe1cc303ae`);
      const data = await result.json();
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  

  
  const handleSubmit = (e) => {
    e.preventDefault()
    let obtenerValores = e.target.cordenadas.value
    let valorArray = obtenerValores.split(" ")
    setCords(valorArray.join(','))
    getCords(cords)
    getWeather(lat, lon)
    
  }

  return (
    <div>
      <h1>Ejercicio13</h1>
      <form onSubmit={handleSubmit}>
      <label>Ingrese una ciudad y pais. <strong className="text-warning">(Ej: Buenos Aires, AR)</strong></label>
      <input placeholder="Ingrese ciudad y pais" name="cordenadas"/>
      <button type="submit">Buscar</button>
      </form>
      <button onClick={getWeather}>click</button>
      <button onClick={getCords}>click</button>
      </div>
  )
}

export default Ejercicio13