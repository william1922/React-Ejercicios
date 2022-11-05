import React from 'react'
import { Row } from 'react-bootstrap'
import CardNoticias from './CardNoticias'
import {Col} from 'react-bootstrap'

const ListaNoticias = ({noticiasData}) => {
  return (
    <Row className='vh-100 overflow-auto d-flex'>
      {
        noticiasData.map((noticia, index) => <Col key={index} md={4} className="p-2 d-flex justify-content-center">
          <CardNoticias noticia={noticia}/>
        </Col>)
      }
    </Row>
  )
}

export default ListaNoticias