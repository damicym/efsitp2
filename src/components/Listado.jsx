import Cita from "./Cita"

function Listado({ citas }) {
    return (
        <div className="one-half column">
            <h2 style={{width: '460px'}}>Administra tus citas</h2>
            { citas.map(c => <Cita data={c} />) }
        </div>
    )
}

export default Listado
