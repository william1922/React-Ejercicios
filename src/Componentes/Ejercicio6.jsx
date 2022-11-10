import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";

function Ejercicio6() {
  const coloresLocalStorage =
    JSON.parse(localStorage.getItem("colorLista")) || [];
  const [coloresLista, setColoresLista] = useState(coloresLocalStorage);
  const [colorCuadro, setColorCuadro] = useState("")

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
    setColorCuadro("")
  };

  const eliminarCard = (id) => {
    const coloresListaFiltrada = coloresLista.filter((color) => {
        return color.codigo !== id;
    })
    setColoresLista(coloresListaFiltrada)
  }

  return (
    <div className="d-flex flex-column justify-content-center container">
      <div className="d-flex border flex-column justify-content-center container w-75">
        <h1>Administrador de colores</h1>
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-row contenedor-form-color align-items-center justify-content-around"
        >
          <div className="w-25 cuadro-color container text-center border rounded" style={{backgroundColor:`${colorCuadro}`}}>color</div>
          <input
            className="w-50 rounded border"
            name="colorTarjeta"
            type="text"
            placeholder="Ingrese color"
            value={colorCuadro}
            onChange={(e) => {setColorCuadro(e.target.value)}}
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
