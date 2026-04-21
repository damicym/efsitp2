import Cita from "./Cita"
import "../styles/listado.css"

function Listado({ citas, setCitas }) {
    return (
        <div className="one-half column">
            <h2 style={{width: '460px'}}>Administra tus citas</h2>
            { citas?.map((c, i) => <Cita key={i} id={i} data={c} setCitas={setCitas} />) }
        </div>
    )
}

export default Listado
