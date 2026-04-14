import Cita from "./Cita"

function Listado({ citas }) {
    return (
        <div className="one-half column">
            <h2 style={{width: '460px'}}>Administra tus citas</h2>
            { citas.map((c, i) => <Cita key={i} data={c} />) }
        </div>
    )
}

export default Listado
