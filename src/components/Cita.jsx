function Cita({ data }) {

    return (
        <div className="cita"> 
            <p>Mascota: <span>{data.mascota}</span></p>
            <p>Dueño: <span>{data.dueño}</span></p>
            <p>Fecha: <span>{data.fecha}</span></p>
            <p>Hora: <span>{data.hora}</span></p>
            <p>Sintomas: <span>{data.sintomas}</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
}

export default Cita
