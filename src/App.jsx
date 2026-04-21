import Form from "./components/Form"
import Listado from "./components/Listado"
import { useState, useEffect } from "react"
import "./styles/app.css"

function App() {
    const [citas, setCitas] = useState(() => {
        const data = localStorage.getItem('citas')
        return data ? JSON.parse(data) : []
    })

    useEffect(() => {
        localStorage.setItem("citas", JSON.stringify(citas))
    }, [citas])

    return (
        <>
            <h1>ADMINISTRADOR DE PACIENTES</h1>
            <div className="container">
                <div className="row">

                    <div className="one-half column">
                        <Form setCitas={setCitas}/>
                    </div>
                    <div className="one-half column">
                        <Listado citas={citas} setCitas={setCitas}/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default App
