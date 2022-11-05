import React from "react"

const TarjetasEmpleados = ({empleados}) => {

  return (
    <div className="d-flex flex-row justify-content-start w-75">
        <img src={`./Imagenes/${empleados.imagen}`} className="" alt={empleados.nombre}></img>
        <div>
            <h2>{empleados.nombre}</h2>
            <div className="d-flex flex-row justify-content-around align-items-center">
                <p>{empleados.titulo}</p>
                <p className="bg-primary bg-opacity-50 rounded px-1 text-center">{empleados.departamento}</p>
            </div>
        </div>
    </div>
  )
}

export default TarjetasEmpleados