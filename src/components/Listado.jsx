import Cita from "./Cita"

function Listado() {

    return (
        <div className="one-half column">
            <h1>Administra tus citas</h1>
            <section>
                <Cita />
                <Cita />
                <Cita />
            </section>
        </div>
    )
}

export default Listado
