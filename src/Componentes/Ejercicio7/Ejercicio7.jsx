import { useState } from "react"
import TarjetasEmpleados from "./TarjetasEmpleados"
import { Empleados } from "./UsersData"


export const Ejercicio7 = () => {
    
    const [empleados, setEmpleados] = useState(Empleados)

  return (
    <div className="d-flex flex-column align-items-center">
        <h1>Ejercicio 7</h1>
        <div className="border border-5 rounded border-primary w-50 d-flex flex-column continer align-items-start">{empleados.map((element) => <TarjetasEmpleados key={element.id} empleados={element}></TarjetasEmpleados>)}</div>
        <p></p>
    </div>
  )
}
