function Cita({ data }) {

    function handleDelete(e){
    }
    return (
        <div className="cita"> 
            <p>Mascota: <span>{data.nomMascota}</span></p>
            <p>Dueño: <span>{data.nomOwner}</span></p>
            <p>Fecha: <span>{data.fecha}</span></p>
            <p>Hora: <span>{data.hora}</span></p>
            <p>Síntomas: <span>{data.sintomas}</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
}

export default Cita
