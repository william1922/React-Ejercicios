import { Button, ListGroup } from "react-bootstrap"

function CardColor({card, eliminarCard}) {
  return (
    <div className="d-flex justify-content-center list-group-item">
    <ListGroup.Item className="d-flex flex-column border align-self-start justify-content-center">
            {card.colorTarjeta}
            <div className="w-100 d-flex border border-primary border-3" style={{backgroundColor:`${card.colorTarjeta}`}}>
                <p className="">
                cuadro
                </p>
            </div>
            <Button variant="" onClick={() => eliminarCard(card.codigo)} className="d-flex bg-danger align-self-end" >
                Borrar
            </Button>
        </ListGroup.Item>
        </div>
  )
}

export default CardColor