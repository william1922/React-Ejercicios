import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import ListaCitas from './ListaCitas';

const FormularioPaciente = () => {
    const clasesNombresDiv = 'd-flex justify-content-between align-items-center my-3';
    const clasesNombresInput = 'w-75 container rounded border border-0 p-2 d-flex';

    const [nombreMascota, setNombreMascota] = useState('');
    const [nombreDuenio, setNombreDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    

    let citasLocalStorage = JSON.parse(localStorage.getItem("citasMascotas")) || [];
    const [citas, setCitas] = useState(citasLocalStorage)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let idUnico = new Date().getTime();
        let citaCreada = {
            idUnico: idUnico,
            nombreMascota,
            nombreDuenio,
            fecha,
            hora,
            sintomas
        }
        setCitas([...citas, citaCreada]);
        setNombreMascota('');
        setNombreDuenio('');
        setFecha('');
        setHora('');
        setSintomas('');
    }

    useEffect(() => {
        localStorage.setItem("citasMascotas", JSON.stringify(citas), [citas]);
    })

    const eliminarCita = (id) => {
        const citasFiltradas = citas.filter((cita) => {
            return cita.idUnico !== id
        })
        setCitas(citasFiltradas)
    }

    return (
        <div className='d-flex flex-column justify-content-center w-75 align-items-center'>
            <h1>Administrador pacientes de veterinaria</h1>
            <div className='rounded w-100 shadow-lg'>
                <h3 className='px-5 py-3'>Llenar el formulario para crear una cita</h3>
                <hr/>
                <Form className='bg-primary bg-opacity-10 px-5 py-3' onSubmit={handleSubmit}>
                    <div  className={`${clasesNombresDiv}`}>
                        <label><strong>Nombre de mascota:</strong></label>
                        <input className={`${clasesNombresInput}`} value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} type="text" placeholder='nombre de mascota' />
                    </div>
                    <div className={`${clasesNombresDiv}`}>
                    <label><strong>Nombre de dueño:</strong></label>
                        <input type="text" className={`${clasesNombresInput}`}  value={nombreDuenio} onChange={(e) => setNombreDuenio(e.target.value)} placeholder='nombre de dueño'/>
                    </div>
                    <div className='d-flex flex-row justify-content-around'>
                        <div className={`${clasesNombresDiv}`}>
                        <label><strong>Fecha</strong></label>
                            <input type="date" className={`${clasesNombresInput}`}  value={fecha} onChange={(e) => setFecha(e.target.value)} />
                        </div>
                        <div className={`${clasesNombresDiv}`}>
                        <label><strong>Hora:</strong></label>
                            <input type="time" className={`${clasesNombresInput}`}  value={hora} onChange={(e) => setHora(e.target.value)}/>
                        </div>
                    </div>
                    <div className={`${clasesNombresDiv}`}>
                    <label><strong>Sintomas</strong></label>
                        <textarea placeholder='describir sintomas' className={`${clasesNombresInput}`}  value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>
                    </div>
                    <Button type='submit'>Agregar nueva cita</Button>
                </Form>
            </div>
            {citas.length > 0 ?  <ListaCitas citas={citas} eliminarCita={eliminarCita}/> : <h1 className='w-100 text-center shadow'>No hay citas</h1>}
        </div>
    )
}

export default FormularioPaciente