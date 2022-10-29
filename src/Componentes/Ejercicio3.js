import { useState } from "react"

export const HolaMundo3 = () =>{
    const [saludar3, setSaludar3] = useState('')

    return (
        <div>
            <h1>Ejercicio 3</h1>
            <h2>Hello my friend{saludar3}!</h2>
            <button onClick={() => setSaludar3(' (from changed state)')}>Hace Click</button>
        </div>
    )
}