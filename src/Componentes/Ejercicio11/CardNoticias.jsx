import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardNoticias = ({noticia}) => {
  return (
    <Card style={{ width: '18rem' }} className="w-100 d-flex">
      <Card.Img variant="top" src={`${noticia.urlToImage}`} style={{ height: '10rem' }} />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text style={{ height: '5rem', overflow: 'auto' }}>
          {noticia.content}
        </Card.Text>
        <Button variant="primary" href={`${noticia.url}`} target="_blank">Ver Noticia</Button>
      </Card.Body>
    </Card>
  )
}

export default CardNoticias