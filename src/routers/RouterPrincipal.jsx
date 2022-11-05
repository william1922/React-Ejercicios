import {routes as listaRutas} from './routes'
import React from 'react'
import { NavLink, BrowserRouter, Route, Routes } from 'react-router-dom'
import { HolaMundo } from '../Componentes/Ejercicio1'
import { HolaMundo2 } from '../Componentes/Ejercicio2'
import { HolaMundo3 } from '../Componentes/Ejercicio3'
import { TaskForm } from '../Componentes/Ejercicio4'
import Ejercicio6 from '../Componentes/Ejercicio6'
import { Ejercicio7 } from '../Componentes/Ejercicio7/Ejercicio7'
import Ejercicio8 from '../Componentes/Ejercicio8/Ejercicio8'
import Ejercicio9 from '../Componentes/Ejercicio9/Ejercicio9'
import Ejercicio10 from '../Componentes/Ejercicio10/Ejercicio10'
import Ejercicio11 from '../Componentes/Ejercicio11/Ejercicio11'
import { Col, Row } from 'react-bootstrap'
import Ejercicio13 from '../Componentes/Ejercicio13/Ejercicio13'

const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <h1>Ejercicios React</h1>
            <nav>
                
                <ul className='container' type='none'>
                <Row className=''>
                    {listaRutas.map((ruta, index) => (
                         <Col key={index} md={2} className="">
                     
                        <li className='d-flex'>
                            <NavLink to={ruta.path}
                            className={(datosNavagacion) => {
                                const isActivado = datosNavagacion.isActive;
                                return isActivado ? "activado container d-flex text-decoration-none text-center m-4 border rounded bg-success bg-opacity-50 h3" : "text-decoration-none los-links text-center my-5 m-4 container border rounded bg-success bg-opacity-50 h3"
                            }}>{ruta.name}</NavLink>
                        </li>
                        </Col>
                    ))}
                    </Row>
                </ul>
                
            </nav>
            <Routes>
                <Route path='/inicio' element={<HolaMundo />} />
                <Route path='/ejercicio2' element={<HolaMundo2 />} />
                <Route path='/ejercicio3' element={<HolaMundo3 />} />
                <Route path='/ejercicio4-5' element={<TaskForm />} />
                <Route path='/ejercicio6' element={<Ejercicio6 />} />
                <Route path='/ejercicio7' element={<Ejercicio7 />} />
                <Route path='/ejercicio8' element={<Ejercicio8 />} />
                <Route path='/ejercicio9' element={<Ejercicio9 />} />
                <Route path='/ejercicio10' element={<Ejercicio10/>}/>
                <Route path='/ejercicio11' element={<Ejercicio11/>}/>
                <Route path='/ejercicio13' element={<Ejercicio13/>}/>
                <Route path='*' element={<><h1>Error 404</h1></>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPrincipal