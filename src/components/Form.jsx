import "../styles/form.css"

function Form({ setCitas }) {

    function handleSubmit(e){
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        setCitas(prev => [...prev, formData])
        e.target.reset()
    }

    return (
        <>
            <h2>Crear mi Cita</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Nombre Mascota</label>
                    <input placeholder="Nombre Mascota" type="text" className="u-full-width" name="nomMascota"></input>
                    <label>Nombre Dueño</label>
                    <input placeholder="Nombre dueño de la mascota" type="text" className="u-full-width" name="nomOwner"></input>
                    <label>Fecha</label>
                    <input type="date" className="u-full-width" name="fecha"></input>
                    <label>Hora</label>
                    <input type="time" className="u-full-width" name="hora"></input>
                    <label>Síntomas</label>
                    <textarea className="u-full-width" name="sintomas"></textarea>
                    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </>
    )
}

export default Form
