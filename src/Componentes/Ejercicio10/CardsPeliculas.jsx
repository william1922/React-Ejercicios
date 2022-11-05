import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import FormEditar from './FormEditar'

const CardsPeliculas = ({pelicula, eliminarCard, setPeliculas}) => {
  const [editarCuadro, setEditarCuadro] = useState(0)
  return (
    <div>
        <div className='bg-success w-50 d-flex flex-column border rounded m-2 align-items-center'>
        <h4 className='text-white'>{pelicula.titulo}</h4>
        <h6 className='text-white'>{pelicula.categoria}</h6>
        <p className='bg-white text-white w-75 bg-opacity-25 p-1'>{pelicula.descripcion}</p>
        <div className='d-flex'>
            <Button className='mb-2 mx-2' variant="warning" onClick={() => setEditarCuadro(pelicula.codigoUnico)}>Editar</Button>
        <Button className='mb-2 mx-2' variant='danger' onClick={() => eliminarCard(pelicula.codigoUnico)}>Borrar</Button>
        </div>
        {
          editarCuadro === pelicula.codigoUnico && (
             <FormEditar pelicula={pelicula} setEditarCuadro={setEditarCuadro} setPeliculas={setPeliculas}/>
          )
        }
        </div>
    </div>
  )
}

export default CardsPeliculas