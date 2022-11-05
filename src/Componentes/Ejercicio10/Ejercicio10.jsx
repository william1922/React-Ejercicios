import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const Ejercicio10 = () => {
  const listaDePeliculas =
    JSON.parse(localStorage.getItem("listapeliculas")) || [];
  const [peliculas, setPeliculas] = useState(listaDePeliculas);

  const eliminarCard = (id) => {
    const peliculasFiltradas = peliculas.filter((element) => {
      return element.codigoUnico !== id;
    });
    setPeliculas(peliculasFiltradas);
  };

  useEffect(() => {
    localStorage.setItem("listapeliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let titulo = e.target.titulo.value;
    let categoria = e.target.categoria.value;
    let descripcion = e.target.descripcion.value;
    let codigoUnico = new Date().getTime();

    let peliculaAGuardar = {
      titulo,
      categoria,
      descripcion,
      codigoUnico,
    };

    setPeliculas([...peliculas, peliculaAGuardar]);
    console.log(peliculas);
    e.target.reset();
  };
  return (
    <Container fluid="">
      <h1>Peliculas</h1>
      <Row>
        <Col md={7} className="">
          <ListaPeliculas
            peliculas={peliculas}
            eliminarCard={eliminarCard}
            setPeliculas={setPeliculas}
          />
        </Col>
        <Col md={5}>
          <div className="d-flex flex-column border border-dark border-3 rounded p-2 align-items-center">
            <h4>Guardar Pelicula</h4>
            <Form
              className="d-flex flex-column align-content"
              onSubmit={handleSubmit}
            >
              <div className="d-flex align-items-center mb-2">
                <div className="d-flex flex-column mx-2">
                  <h5>Titulo</h5>
                  <input
                    type="text"
                    name="titulo"
                    placeholder="titulo de la pelicula"
                  ></input>
                </div>
                <select
                  className="w-50 align-self-end mx-2"
                  name="categoria"
                  required
                >
                  <option value="comedia">Comedia</option>
                  <option value="drama">Drama</option>
                  <option value="suspenso">Suspenso</option>
                </select>
              </div>
              <textarea
                placeholder="Descripcion"
                name="descripcion"
                className="container mb-2"
              ></textarea>
              <Button className="border w-25" type="submit">
                Guardar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ejercicio10;
