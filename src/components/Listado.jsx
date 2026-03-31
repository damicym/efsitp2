import Cita from "./Cita"

function Listado() {
    return (
        <div className="one-half column">
            <h2 style={{width: '460px'}}>Administra tus citas</h2>
            <Cita />
            <Cita />
            <Cita />
        </div>
    )
}

export default Listado
