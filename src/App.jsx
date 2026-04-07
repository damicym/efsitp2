import Form from "./components/Form"
import Listado from "./components/Listado"
import { useState } from "react"

function App() {
    const [citas, setCitas] = useState([
        { mascota: 'Hook', dueño: 'Fernando', fecha: '2024-06-01', hora: '20:00', sintomas: 'No come' },
        { mascota: 'Luna', dueño: 'Maria', fecha: '2024-06-02', hora: '10:00', sintomas: 'Vomitos' },
        { mascota: 'Max', dueño: 'Carlos', fecha: '2024-06-03', hora: '15:00', sintomas: 'Fiebre' }
    ])
    
    return (
        <>
            <h1>ADMINISTRADOR DE PACIENTES</h1>
            <div className="container">
                <div className="row">

                    <div className="one-half column">
                        <Form />
                    </div>
                    <div className="one-half column">
                        <Listado citas={citas}/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default App
