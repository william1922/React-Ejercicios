import React from 'react'
import CardsPeliculas from './CardsPeliculas'

const ListaPeliculas = ({peliculas, eliminarCard, setPeliculas}) => {
  return (
    <div>
      {peliculas.map((pelicula, index) => <CardsPeliculas key={index} pelicula={pelicula} eliminarCard={eliminarCard} setPeliculas={setPeliculas}/>)}
    </div>
  )
}

export default ListaPeliculas