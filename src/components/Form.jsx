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
                    <input placeholder="Nombre Mascota" type="text" className="u-full-width" name="nomMascota" required></input>
                    <label>Nombre Dueño</label>
                    <input placeholder="Nombre dueño de la mascota" type="text" className="u-full-width" name="nomOwner" required></input>
                    <label>Fecha</label>
                    <input type="date" className="u-full-width" name="fecha" required></input>
                    <label>Hora</label>
                    <input type="time" className="u-full-width" name="hora" required></input>
                    <label>Síntomas</label>
                    <textarea className="u-full-width" name="sintomas" required></textarea>
                    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </>
    )
}

export default Form
