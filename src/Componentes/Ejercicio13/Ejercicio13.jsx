import React from 'react'
import { useState } from "react"

const Ejercicio13 = () => {
  const [cords, setCords] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [objetoClima, setObjetoClima] = useState()
  const texto='lima,peru';
  const long='8.8701539';
  const lati='50.039186';

  /*const getCords = async(texto) => {
    
    try {
      const result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${texto}&appid=`)
      let data = await result.json();
      let latitud = data[0].lat
      let longitud = data[0].lon
      setLat(latitud)
      setLon(longitud)
   } catch (error) {
      console.log(error)
   }
  }*/
  const getCords = async(texto) => {
    try {
      const result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${texto}&appid=`)
      const data = await result.json();
      setLat(data[0].lat.toString())
      setLon(data[0].lon.toString())
      console.log(lat, lon)
      console.log(data)
      return {
      lat: data[0].lat.toString(),
      lon: data[0].lon.toString(),
      }
   } catch (error) {
      console.log(error)
   }
  }
  
  const getWeather = async( long, lati) => {
    try {
      const result = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&units=metric&lang=sp&appid=`);
      const data = await result.json();
      setObjetoClima(data)
    } catch (error) {
      console.log(error)
    }
  }

  /*const handleSubmit = (e) => {
    e.preventDefault()
    let obtenerValores = e.target.cordenadas.value;
    let valorArray = obtenerValores.split(" ");
    let nuevoValorArray = valorArray.join(',')
    setCords(nuevoValorArray);
    console.log(cords + "CORDS-PRUEBA")
    getCords(nuevoValorArray);
    console.log(lon + "LON-PRUEBA")
    console.log(lat + "LAT-PRUEBA")
    getWeather(lon, lat)
    console.log(objetoClima)
  }*/

  const handleSubmit = async (e) => {
    e.preventDefault()
    let obtenerValores = e.target.cordenadas.value
    let valorArray = obtenerValores.split(" ")
    setCords(valorArray.join(','))
    /*getCords(cords)
    getWeather(lon, lat)*/
    const result= await getCords(valorArray.join(','));
    console.log(result)
     await getWeather(result.lon, result.lat);
     console.log(objetoClima)
  }

  /*const [cords, setCords] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const getCords = async(texto='lima,peru') => {
   console.log(texto)
    try {
      const result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${texto}&appid=`)
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
    console.log(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&units=metric&lang=sp&appid=`)
    try {
      const result = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&units=metric&lang=sp&appid=`);
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
    getWeather(lon, lat)
    
  }*/
  return (
    <div>
      <h1>Ejercicio13</h1>
      <form onSubmit={handleSubmit}>
      <label>Ingrese una ciudad y pais. <strong className="text-warning">(Ej: BuenosAires Argentina )</strong></label>
      <input placeholder="Ingrese ciudad y pais" name="cordenadas"/>
      <button type="submit">Buscar</button>
      <h1>{objetoClima ? objetoClima.current.temp : "hola"}</h1>
      </form>
      <button onClick={() => {getWeather(long, lati)}}>Weather</button>
      <button onClick={() => {getCords(texto)}}>Cords</button>
      </div>
  )
}

export default Ejercicio13
