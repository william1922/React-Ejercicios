
import TarjetasEmpleados from "./TarjetasEmpleados"
import { Empleados } from "./UsersData"


export const Ejercicio7 = () => {
    
   

  return (
    <div className="d-flex flex-column align-items-center">
        <h1>Ejercicio 7</h1>
        <div className="border rounded border-primary w-25 d-flex flex-column align-items-start">{Empleados.map((element) => <TarjetasEmpleados key={element.id} empleados={element}></TarjetasEmpleados>)}</div>
        <p></p>
    </div>
  )
}
