import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'

export const FormularioInputs = () => {
    const [nombre, setNombre] = useState('')

    const [apellido, setApellido] = useState('')

    const [dni, setDni] = useState('')

    const [email, setEmail] = useState('')

    const verificarNombre = (nombre) =>{
        if(nombre.includes(0) ||nombre.includes(1) ||nombre.includes(2) ||nombre.includes(3) ||nombre.includes(4) ||nombre.includes(5) ||nombre.includes(6) ||nombre.includes(7) ||nombre.includes(8) ||nombre.includes(9) || nombre.length >= 20){
            return true
        }
    }

    const verificarApellido = (apellido) => {
        if(apellido.includes(0) || apellido.includes(1) || apellido.includes(2) || apellido.includes(3) || apellido.includes(4) || apellido.includes(5) || apellido.includes(6) || apellido.includes(7) || apellido.includes(8) || apellido.includes(9) || apellido.length >= 30){
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(verificarNombre(nombre)){
            return alert('Ingrese el nombre correctamente')
        }
        if(verificarApellido(apellido)){
            return alert('Ingrese el apellido correctamente')
        }
        if(Number(dni) === NaN || dni.length < 8 || dni.length > 8 || nombre === "" || apellido === "" || dni === "" || email === ""){
            alert('Debe completar todos los campos')
        } else {
            alert('Datos enviados')
        }
        setNombre('')
        setApellido('')
        setDni('')
        setEmail('')
    }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <div className='d-flex flex-column my-3'>
            <label>Nombre:</label>
            <input type="Text" name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
            </div>
            <div className='d-flex flex-column my-3'>
                <label>Apellido:</label>
                <input type="text" name='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
            </div>
            <div className='d-flex flex-column my-3'>
                <label>DNI:</label>
                <input type="text" value={dni} name='dni' onChange={(e) => setDni(e.target.value)}></input>
            </div>
            <div className='d-flex flex-column my-3'>
                <label>Email:</label>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='d-flex justify-content-center'>
            <Button type='submit'>
                Enviar
            </Button>
            </div>
        </Form>
    </div>
  )
}
