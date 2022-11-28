import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaNoticias from './ListaNoticias';

const Ejercicio11 = () => {

  const [noticiasData, setNoticiasData] = useState([]);

   const getDara = async ( pais, categorias) => {
    console.log(pais, categorias)
    const link = 'https://newsapi.org/v2/top-headlines?'
    const keyApi = ''

     try {
        const result = await fetch(`${link}country=${pais}&category=${categorias}&apikey=${keyApi}`)
        const data = await result.json();
        setNoticiasData(data.articles)
     } catch (error) {
        console.log(error)
     }

   }


   const handleSubmit = (e) => {
    e.preventDefault();
    let pais = e.target.pais.value;
    let categoria = e.target.categoria.value;
    getDara(pais, categoria)
    console.log(noticiasData)
   }
  
   useEffect(() => {
    getDara("ar", "business")
   }, [])
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1 className='border-bottom text-center w-100'>Noticias</h1>
        <div className='w-75 d-flex container flex-column align-content-center border'>
        <div className='d-flex border-bottom justify-content-around w-100'>
            <h3>Buscar por categoria</h3>
            <Form className='d-flex flex-row align-items-center' onSubmit={handleSubmit}>
              <div className='mx-4'>
              <label className='mx-2'>Pais</label>
            <select className='align-self-center' name='pais'>
                <option value="ar">Argentina</option>
                <option value="br">Brazil</option>
                <option value="pt">Portugal</option>
                <option value="mx">Mexico</option>
                <option value="us">Estados Unidos</option>
                <option value="fr">Francia</option>
                <option value="jp">Japon</option>
            </select>
            </div>
            <div className='mx-4'>
            <label className='mx-2'>Categoria</label>
            <select className='align-self-center' name='categoria' required>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="general">General</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deporte</option>
                <option value="technology">Tecnologia</option>
            </select>
            </div>
            <Button type='submit'>Buscar</Button>
            </Form>
        </div>
        <div className='container'>
        <ListaNoticias noticiasData={noticiasData}/>
        </div>
        </div>
    </div>
  )
}

export default Ejercicio11
