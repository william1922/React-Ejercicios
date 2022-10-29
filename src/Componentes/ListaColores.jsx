import { ListGroup } from "react-bootstrap"
import CardColor from "./CardColor"


function ListaColores({coloresLista, eliminarCard}) {
  return (
    <ListGroup className="d-flex flex-row justify-content-around w-50">
        {
            coloresLista.map((card, index) => <CardColor key={index}  card={card} eliminarCard={eliminarCard}></CardColor>)
        }
    </ListGroup>
  )
}

export default ListaColores