import React from 'react';
import { Form } from 'react-bootstrap';
import CitasCard from './CitasCard'

const ListaCitas = ({citas, eliminarCita}) => {
  
  return (
    <div className='w-100 border shadow my-2 p-2 bg-warning bg-opacity-50'>
        <Form className='w-100 d-flex justify-content-around'>
            {citas.map((citas, index) => <CitasCard key={index} citas={citas} eliminarCita={eliminarCita}></CitasCard>)}
        </Form>
    </div>
  )
}

export default ListaCitas