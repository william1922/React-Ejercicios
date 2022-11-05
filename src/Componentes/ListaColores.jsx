import { ListGroup } from "react-bootstrap"
import CardColor from "./CardColor"


function ListaColores({coloresLista, eliminarCard}) {
  return (
    <ListGroup className="d-flex flex-row container justify-content-around list-group list-group-horizontal my-3">
        {
            coloresLista.map((card, index) => <CardColor key={index}  card={card} eliminarCard={eliminarCard}></CardColor>)
        }
    </ListGroup>
  )
}

export default ListaColores