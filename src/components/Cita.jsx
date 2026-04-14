import "../styles/cita.css"

function Cita({ data, id, setCitas }) {

    function handleDelete(){
        window.confirm("Estas seguro de querer eliminar la cita?")
        setCitas(prev => {
            const prevCitas = [...prev]
            prevCitas.splice(id, 1)
            return prevCitas 
        })
    }

    return (
        <div className="cita"> 
            <p>Mascota: <span>{data.nomMascota}</span></p>
            <p>Dueño: <span>{data.nomOwner}</span></p>
            <p>Fecha: <span>{data.fecha}</span></p>
            <p>Hora: <span>{data.hora}</span></p>
            <p>Síntomas: <span>{data.sintomas}</span></p>
            <button className="button elimnar u-full-width" onClick={handleDelete}>Eliminar ×</button>
        </div>
    )
}

export default Cita
