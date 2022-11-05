import React from 'react'
import { Form } from 'react-bootstrap'

const FormEditar = ({pelicula, setEditarCuadro, setPeliculas}) => {

    const peliculaEditada = (e, id) => {
        e.preventDefault()

        let peliculas = JSON.parse(localStorage.getItem('listapeliculas'))|| [];

        const indice = peliculas.findIndex(element => element.codigoUnico === id);

        let titulo = e.target.titulo.value;
        let categoria = e.target.categoria.value;
        let descripcion = e.target.descripcion.value;

        let peliculaEditada = {
            titulo,
            categoria,
            descripcion
        }

        peliculas[indice] = peliculaEditada;
        localStorage.setItem('listapeliculas', JSON.stringify(peliculas))
        setPeliculas(peliculas)
        setEditarCuadro(0)
    }
  return (
    <div className='d-flex flex-column w-100 cuadroEditar align-items-center border-top bg-primary bg-opacity-50'>
        <h5 className='text-white'>Editar pelicula</h5>
        <Form className='d-flex flex-column' onSubmit={(e) => peliculaEditada(e, pelicula.codigoUnico)}>
            <input type="text" className='m-2 w-75 rounded border border-0' name='titulo' placeholder='Titulo' defaultValue={pelicula.titulo}/>
            <select className='m-2 w-75 rounded border border-0' name="categoria" required>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="suspenso">Suspenso</option>
            </select>
            <textarea placeholder='Descripcion' name='descripcion' className='w-100 m-2 rounded border border-0' defaultValue={pelicula.descripcion}/>
            <div className='d-flex justify-content-around mb-2'>
                <button type='submit' className='border border-0 rounded bg-success text-white'>Guardar</button>
                <button onClick={() => setEditarCuadro(0)} className="border border-0 rounded bg-danger text-white">Cancelar</button>
            </div>
        </Form>
    </div>
  )
}

export default FormEditar