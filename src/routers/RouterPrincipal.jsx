
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

const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <h1>Ejercicios React</h1>
            <nav>
                <ul className='d-flex align-items-center container' type='none'>
                    <li className='d-flex'>
                        <NavLink className='text-decoration-none text-center m-1 border rounded bg-success bg-opacity-50 h3' to='/inicio'>Ejercicio 1</NavLink>
                    </li>
                    <li className='d-flex'>
                        <NavLink className='text-decoration-none text-center m-1 border rounded bg-success bg-opacity-50 h3' to='/ejercicio2'>Ejercicio 2</NavLink>
                    </li>
                    <li className='d-flex'>
                        <NavLink className='text-decoration-none text-center m-1 border rounded bg-success bg-opacity-50 h3' to='/ejercicio3'>Ejercicio 3</NavLink>
                    </li>
                    <li className='d-flex'>
                        <NavLink className='text-decoration-none text-center m-1 border rounded bg-success bg-opacity-50 h3' to='/ejercicio4-5'>Ejercicio 4-5</NavLink>
                    </li>
                    <li className='d-flex'>
                        <NavLink className='text-decoration-none text-center m-1 border rounded bg-success bg-opacity-50 h3' to='/ejercicio6'>Ejercicio 6</NavLink>
                    </li>
                    <li className='d-flex'>
                        <NavLink className='text-decoration-none text-center m-1 border rounded bg-success bg-opacity-50 h3' to='/ejercicio7'>Ejercicio 7</NavLink>
                    </li>
                    <li className='d-flex'>
                        <NavLink className='text-decoration-none text-center m-1 border rounded bg-success bg-opacity-50 h3' to='/ejercicio8'>Ejercicio 8</NavLink>
                    </li>
                    <li className='d-flex'>
                        <NavLink className='text-decoration-none text-center m-1 border rounded bg-success bg-opacity-50 h3' to='/ejercicio9'>Ejercicio 9</NavLink>
                    </li>
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
                <Route path='*' element={<><h1>Error 404</h1></>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPrincipal