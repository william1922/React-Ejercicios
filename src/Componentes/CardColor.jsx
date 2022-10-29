import { Button, ListGroup } from "react-bootstrap"

function CardColor({card, eliminarCard}) {
  return (
    <div className="d-flex justify-content-center ">
    <ListGroup.Item className="d-flex flex-column align-self-start justify-content-center">
            {card.colorTarjeta}
            <div className="w-100 d-flex" style={{backgroundColor:`${card.colorTarjeta}`}}>
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