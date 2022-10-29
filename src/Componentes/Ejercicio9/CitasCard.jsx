import { Button } from 'react-bootstrap'
import React from 'react'

const CitasCard = ({citas, eliminarCita}) => {
    const nombreClaseDiv = 'd-flex justify-content-start align-items-center m-1'
    const nombreSpan = 'rounded mx-2 container w-100 bg-white'

  return (
    <div className='w-25 bg-dark bg-opacity-10 rounded'>
        <div className='d-flex p-1 m-2'>
            <div className='bg-primary bg-opacity-75 rounded-circle w-25'>.</div>
            <div>
                <div className='w-100 d-flex flex-column align-items-start'>
                    <p>Mascota: {citas.nombreMascota}</p>
                    <p>Dueño: {citas.nombreDuenio}</p>
                </div>
            </div>
        </div>
        <div className='bg-primary bg-opacity-10 '>
            <div className='d-flex justify-content-start align-items-center m-1'>
                <p className='d-flex my-2'>Fecha</p>
                <span className='rounded mx-2 container w-100 bg-white'>{citas.fecha}</span>
            </div>
            <div className={`${nombreClaseDiv}`}>
                <p className='d-flex my-2'>Hora</p>
                <span className={`${nombreSpan}`}>{citas.hora}</span>
            </div>
            <div className={`${nombreClaseDiv}`}>
                <p className='d-flex my-2'>Sintomas</p>
                <span className={`${nombreSpan}`}>{citas.sintomas}</span>
            </div>
        </div>
        <div className='d-flex justify-content-end'>
        <Button variant='danger' onClick={() => eliminarCita(citas.idUnico)}>Borrar</Button>
        </div>   
    </div>
  )
}

export default CitasCard