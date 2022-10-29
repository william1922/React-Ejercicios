import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";

function Ejercicio6() {
  const coloresLocalStorage =
    JSON.parse(localStorage.getItem("colorLista")) || [];
  const [coloresLista, setColoresLista] = useState(coloresLocalStorage);

  useEffect(() => {
    localStorage.setItem("colorLista", JSON.stringify(coloresLista));
  }, [coloresLista])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let codigo = new Date().getTime();
    let colorTarjeta = e.target.colorTarjeta.value
    if (colorTarjeta === ""){
        return alert('No ingreso color')
    }
    let cardNueva = {
        codigo,
        colorTarjeta
    }
    setColoresLista([...coloresLista, cardNueva]);
    e.target.reset()
  };

  const eliminarCard = (id) => {
    const coloresListaFiltrada = coloresLista.filter((color) => {
        return color.codigo !== id;
    })
    setColoresLista(coloresListaFiltrada)
  }

  return (
    <div>
      <div className="bg-warning d-flex flex-column justify-content-center container w-75">
        <h1>Administrador de colores</h1>
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-row bg-success align-items-center justify-content-around"
        >
          <div className="bg-primary w-25">color</div>
          <input
            className="w-50"
            name="colorTarjeta"
            type="text"
            placeholder="Ingrese color"
          />
          <Button type="submit" className="d-flex align-self-end">
            Guardar
          </Button>
        </Form>
      </div>
      <ListaColores coloresLista={coloresLista} eliminarCard={eliminarCard}/>
    </div>
  );
}

export default Ejercicio6;
