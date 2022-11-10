import { Col, Row } from "react-bootstrap"
import CardColor from "./CardColor"


function ListaColores({coloresLista, eliminarCard}) {
  return (
    <Row className="d-flex flex-row w-100 container justify-content-center list-group list-group-horizontal my-3">
        {
            coloresLista.map((card, index) => <Col key={index}  md={3}><CardColor card={card} eliminarCard={eliminarCard}></CardColor>
            </Col>)
        }
    </Row>
  )
}

export default ListaColores